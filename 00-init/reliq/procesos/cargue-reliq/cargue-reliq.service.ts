import { Injectable } from '@nestjs/common';
import { CreateCargueReliqDto } from './dto/create-cargue-reliq.dto';
import { UpdateCargueReliqDto } from './dto/update-cargue-reliq.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReliInfoEmprDivi } from './entities/cargue-reliq.entity';
import { In, Repository } from 'typeorm';
import { ReliInfoApsRelleno } from './entities/reliInfo-aps-relleno.entity';
import { ReliInfoApsEmprDivi } from './entities/reliInfo-apsempr-divi.entity';
import { ReliInfoAdicional } from './entities/reliInfo-adicional.entity';
import { ReliInfUsuApSemprDivi } from './entities/reliInf-usu-aps-empr-divi.entity';

@Injectable()
export class CargueReliqService {

  constructor(
    @InjectRepository(ReliInfoEmprDivi)
    private readonly reliInfoEmprDiviRepository: Repository<ReliInfoEmprDivi>,
    @InjectRepository(ReliInfoApsRelleno)
    private readonly reliInfoApsRellenoRepository: Repository<ReliInfoApsRelleno>,
    @InjectRepository(ReliInfoApsEmprDivi)
    private readonly reliInfoApsEmprDiviRepository: Repository<ReliInfoApsEmprDivi>,
    @InjectRepository(ReliInfoAdicional)
    private readonly reliInfoAdicionalRepository: Repository<ReliInfoAdicional>,
    @InjectRepository(ReliInfUsuApSemprDivi)
    private readonly reliInfUsuApSemprDiviRepository: Repository<ReliInfUsuApSemprDivi>,
  ) {}

  create(createCargueReliqDto: CreateCargueReliqDto) {
    return 'This action adds a new cargueReliq';
  }

  async getResumenEmpresa(idReliq: number) {
    try {
      return await this.reliInfoEmprDiviRepository.query(
        `
        SELECT RI.*, AE.EMPR_NOMBRE FROM RELIQ.RELI_INFOEMPRDIVI ri INNER JOIN TARIFICADOR.AUGE_EMPRESAS ae ON (RI.EMPR_EMPR = AE.EMPR_EMPR ) WHERE ri.RELI_ID = :1
        `,
        [idReliq]
      );
    } catch (error) {
      console.log(`Error CargueReliqService.getResumenEmpresa: ${error}`);
    }
  }
  async getResumenAPS(idReliq: number) {
    try {
      return await this.reliInfoApsEmprDiviRepository.query(
        `
        SELECT RI.*, AE.EMPR_NOMBRE FROM RELIQ.RELI_INFOAPSEMPRDIVI ri INNER JOIN TARIFICADOR.AUGE_EMPRESAS ae ON (RI.EMPR_EMPR = AE.EMPR_EMPR ) WHERE ri.RELI_ID = :1
        `,
        [idReliq]
      );
    } catch (error) {
      console.log(`Error CargueReliqService.getResumenAPS: ${error}`);
    }
  }
  async getResumenRelleno(idReliq: number) {
    try {
      return await this.reliInfoApsRellenoRepository.findBy(
        { reliId: idReliq }
      )
    } catch (error) {
      console.log(`Error CargueReliqService.getResumenRelleno: ${error}`);
    }
  }
  async getReliInfoAdicional(idReliq: number) {
    try {
      return await this.reliInfoAdicionalRepository.find({
        select:{
          reliId: true,
          ceadAnno: true,
          ceadMes: true,
          ceadCdf: true,
          ceadCtl: true,

        },
        where: { reliId: idReliq }
      })
    } catch (error) {
      console.log(`Error CargueReliqService.getReliInfoAdicional: ${error}`);
    }
  }
  async getReliInfoUsuarios(idReliq: number) {
    try {
      return await this.reliInfUsuApSemprDiviRepository.findBy({
        reliId: idReliq
      })
    } catch (error) {
      console.log(`Error CargueReliqService.getReliInfoUsuarios: ${error}`);
    }
  }


  
  findOne(id: number) {
    return `This action returns a #${id} cargueReliq`;
  }

  update(id: number, updateCargueReliqDto: UpdateCargueReliqDto) {
    return `This action updates a #${id} cargueReliq`;
  }

  remove(id: number) {
    return `This action removes a #${id} cargueReliq`;
  }
}
