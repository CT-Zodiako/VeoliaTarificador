import { Injectable } from '@nestjs/common';
import { CreateEmpresaDTO } from './dto/create-empresa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AugeEmpresas } from './entities/empresa.entity';
import { Repository } from 'typeorm';
import { response } from 'express';
import { UpdataEmpresaDTO } from './dto/update-empresa.dto';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(AugeEmpresas)
    private readonly empresaRepository: Repository<AugeEmpresas>,
  ) {}
  async create(createEmpresaDTO: CreateEmpresaDTO, sisuId: number) {
    console.log(createEmpresaDTO)
    const {EMPR_ESTADO,EMPR_NOMBRE,EMPR_NUAP,EMPR_PROPIA}=createEmpresaDTO;
    try {
      const query = `
        INSERT INTO TARIFICADOR.AUGE_EMPRESAS
        (EMPR_EMPR, EMPR_NOMBRE, EMPR_ESTADO, EMPR_PROPIA, EMPR_FECHACREACION, USUA_USUA, EMPR_NUAP) VALUES(
        SAUGE_EMPRESAS.nextval, :EMPR_NOMBRE, :EMPR_ESTADO, :EMPR_PROPIA , sysdate, :sisuId, :EMPR_NUAP)
      `

       const response = await this.empresaRepository.query(query, [
        EMPR_NOMBRE,
        EMPR_ESTADO,
        EMPR_PROPIA,
        sisuId,
        EMPR_NUAP
      ]);


      return response;
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear la empresa');
    }
  }

  async getAllEmpresas() {
    return await this.empresaRepository.find({
      order: {
        EMPR_NOMBRE: 'ASC',
      },
    });
  }

  async findOneEmpreEmpre(EMPRE_EMPRE: number) {
    return await this.empresaRepository.findBy({
      EMPR_EMPR: EMPRE_EMPRE,
    });
  }

  async deleteEmpresa(EMPRE_EMPRE: number) {
    return await this.empresaRepository.update(
      { EMPR_EMPR: EMPRE_EMPRE },
      { EMPR_ESTADO: '0' },
    );
  }

  async getEmpresasByApsaIdAndPropia(apsaId: number, propia: number) {
    try {
      const empresas = await this.empresaRepository
        .createQueryBuilder('es')
        .innerJoin(
          'AUCO_APSEMPRDIVI',
          'apsem',
          'es.empr_empr = apsem.empr_empr',
        )
        .where('apsem.apsa_id = :apsaId', { apsaId })
        .andWhere('es.EMPR_PROPIA = :propia', { propia })
        .getRawMany();

      return empresas;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener las empresas');
    }
  }

  async getByAps(aps: number) {
    try {
      const empresas = await this.empresaRepository
        .createQueryBuilder('es')
        .innerJoin(
          'AUCO_APSEMPRDIVI',
          'apsem',
          'es.empr_empr = apsem.empr_empr',
        )
        .where('apsem.apsa_id = :apsaId', { apsaId: aps })
        .andWhere('es.EMPR_ESTADO = :estado', { estado: 1 })
        .getRawMany();

      return empresas;
    } catch (error) {
      console.error(error);
    }
  }

  async updataEmpresa(updataEmpresaDTO: UpdataEmpresaDTO) {
    const { EMPR_EMPR, ...rest } = updataEmpresaDTO;
    const result = await this.empresaRepository.update(
      {
        EMPR_EMPR: EMPR_EMPR,
      },
      rest,
    );

    return result;
  }
}
