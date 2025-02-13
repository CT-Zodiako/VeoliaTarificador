import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReliInfoEmprDivi } from './entities/cargue-reliq.entity';
import { In, Repository } from 'typeorm';
import { ReliInfoApsRelleno } from './entities/reliInfo-aps-relleno.entity';
import { ReliInfoApsEmprDivi } from './entities/reliInfo-aps-empr-divi.entity';
import { ReliInfoAdicional } from './entities/reliInfo-adicional.entity';
import { ReliInfUsuApSemprDivi } from './entities/reliInf-usu-aps-empr-divi.entity';
import { UpdateReliInfoEmprDiviArrayDTO} from './dto/update-ReliInfoEmprDivi.dto';
import {UpdateReliInfoApsEmprDiviArrayDTO} from './dto/update-ReliInfoApsEmprDivi.dto'
import { UpdateReliInfoApsRellenoArrayDTO } from './dto/update-ReliInfoApsRelleno.dto';
import { UpdateReliInfoAdicionalArrayDTO } from './dto/update-ReliInfoAdicional.dto';
import { UpdateReliInfUsuApSemprDiviArrayDTO } from './dto/update-ReliInfUsuApSemprDivi.dto';

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
          ceadId: true,
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



  async updateResumenEmpresa(usuaUsua:number,updateReliInfoEmprDiviDTO: UpdateReliInfoEmprDiviArrayDTO) {
    try {
      updateReliInfoEmprDiviDTO.data.forEach(async (element) => {
        await this.reliInfoEmprDiviRepository.update(
          { reliId: element.reliId, inedId: element.inedId },
          {
            inedCblj: element.inedCblj,
            inedLblj: element.inedLblj,
            inedN: element.inedN,
            inedM3Agua: element.inedM3Agua,
            inedCp: element.inedCp,
            inedM2Ccj: element.inedM2Ccj,
            inedM2Lavj: element.inedM2Lavj,
            inedTij: element.inedTij,
            inedKlpj: element.inedKlpj,
            inedTmj: element.inedTmj,
            inedClavj: element.inedClavj,
            inedQrtj: element.inedQrtj,
            inedQrsj: element.inedQrsj,
            usuaUsua: usuaUsua,
          }
        );
      });
      return { message: 'Resumen Empresa Actualizado' };     
    } catch (error) {
      console.log(`Error CargueReliqService.updateResumenEmpresa: ${error}`);
   }
  }

  async updateResumenAPS(usuaUsua:number,updateReliInfoApsEmprDiviArrayDTO: UpdateReliInfoApsEmprDiviArrayDTO) {
    try {
      updateReliInfoApsEmprDiviArrayDTO.data.forEach(async (element) => {
        await this.reliInfoApsEmprDiviRepository.update(
          { reliId: element.reliId, iaedId: element.iaedId },
          {
            diviDivi: element.diviDivi,
            iaedQrtz: element.iaedQrtz,
            iaedCpe: element.iaedCpe,
            iaedT: element.iaedT,
            iaedVacrtabc: element.iaedVacrtabc,
            iaedVacrt: element.iaedVacrt,
            iaedCrtz: element.iaedCrtz,
            iaedQbl: element.iaedQbl,
            iaedQlu: element.iaedQlu,
            iaedQr: element.iaedQr,
            iaedTafa: element.iaedTafa,
            iaedNd: element.iaedNd,
            iaedNa: element.iaedNa,
            iaedQna: element.iaedQna,
            iaedTafna: element.iaedTafna,
            iaedQa: element.iaedQa,
            iaedAprovecha: element.iaedAprovecha,
            iaedQalmacen: element.iaedQalmacen,
            iaedCpeet: element.iaedCpeet,
            iaedQrtet: element.iaedQrtet,
            iaedCrtcomp: element.iaedCrtcomp,
            iaedCdfcomp: element.iaedCdfcomp,
            iaedQrscomp: element.iaedQrscomp,
            iaedNaa: element.iaedNaa,
            iaedNda: element.iaedNda,
            usuaUsua: usuaUsua,
          }
         
        );
      });
      return { message: 'Resumen APS Actualizado' };
    } catch (error) {
      console.log(`Error CargueReliqService.updateResumenAPS: ${error}`);
    }
  }

  async updateResumenRellno(usuaUsua:number, updateReliInfoApsRellenoArrayDTO: UpdateReliInfoApsRellenoArrayDTO) {
    try {
      updateReliInfoApsRellenoArrayDTO.data.forEach(async (element) => {
        await this.reliInfoApsRellenoRepository.update(
          { reliId: element.reliId, iareId: element.iareId },
          {
            iareQrs: element.iareQrs,
            iareCdfk: element.iareCdfk,
            iareVacdfabc: element.iareVacdfabc,
            iareVacdf: element.iareVacdf,
            iareVl: element.iareVl,
            iareCtmlx: element.iareCtmlx,
            iareCtlk: element.iareCtlk,
            iareVactlabc: element.iareVactlabc,
            iareVactl: element.iareVactl,
            iareEscenario: element.iareEscenario,
            iareC: element.iareC,
            usuaUsua: usuaUsua,
          }
        );
      });
      
      return { message: 'Resumen Relleno Actualizado' };
    } catch (error) {
      console.log(`Error CargueReliqService.updateResumenRellno: ${error}`);
    }
  }

  async updateResumenAdicional(usuaUsua:number, updateReliInfoAdicionalArrayDTO: UpdateReliInfoAdicionalArrayDTO) {
    try {
      updateReliInfoAdicionalArrayDTO.data.forEach(async (element) => {
        await this.reliInfoAdicionalRepository.update(
          { reliId: element.reliId, ceadId: element.ceadId },
          {
            ceadCdf: element.ceadCdf,
            ceadCtl: element.ceadCtl,
            usuaUsua: usuaUsua,
          }
        );
      });
      return { message: 'Resumen Adicional Actualizado' };
    } catch (error) {
      console.log(`Error CargueReliqService.updateResumenAdicional: ${error}`);
    }
  }

  async updateReliInfoUsuarios(usuaUsua:number, updateReliInfUsuApSemprDiviArrayDTO: UpdateReliInfUsuApSemprDiviArrayDTO) {
    try {
      updateReliInfUsuApSemprDiviArrayDTO.data.forEach(async (element) => {
        await this.reliInfUsuApSemprDiviRepository.update(
          { reliId: element.reliId, iuaeId: element.iuaeId },
          {
            diviDivi: element.diviDivi,
            faprCodigo: element.faprCodigo,
            clasClaseUso: element.clasClaseUso,
            paraTipTar20012: element.paraTipTar20012,
            iuaeCantidad: element.iuaeCantidad,
            iuaeToneladas: element.iuaeToneladas,
            paraUbicacion20016: element.paraUbicacion20016,
            paraTipFac20014: element.paraTipFac20014,
            usuaUsua: usuaUsua,
          }
        );
      });
      return { message: 'ReliInfoUsuarios Actualizado' };
    } catch (error) {
      console.log(`Error CargueReliqService.updateReliInfoUsuarios: ${error}`);
    }
  }
}
