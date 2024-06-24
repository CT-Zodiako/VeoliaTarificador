import { Injectable } from '@nestjs/common';
import { CreateCostoPodaDto } from './dto/create-costo-poda.dto';
import { UpdateCostoPodaDto } from './dto/update-costo-poda.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PodaEntity } from './entities/costo-poda.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CostoPodaService {
  constructor(
    @InjectRepository(PodaEntity)
    private readonly costoPodaRepository: Repository<PodaEntity>,
  ) {}


  async findPoda(data) {
    const { APSA_ID, CPTE_ANNO, CPTE_MES } = data;
    return await this.costoPodaRepository.query(`
      SELECT EMPS.EMPR_NOMBRE, PODA.CPTE_VALORSUI, PODA.CPTE_VALORFACT, PODA.CPTE_TIPINGRESO, EMPS.EMPR_EMPR FROM AUCO_PODATECHO PODA 
      INNER JOIN auco_apsemprdivi EPRD ON PODA.EMPR_EMPR = EPRD.EMPR_EMPR AND PODA.APSA_ID  = EPRD.APSA_ID
      INNER JOIN auge_empresas EMPS ON EMPS.EMPR_EMPR = EPRD.EMPR_EMPR 
      WHERE PODA.APSA_ID = ${APSA_ID} AND CPTE_ANNO = ${CPTE_ANNO} AND CPTE_MES = ${CPTE_MES} AND emps.empr_estado = 1
      `);
  }

  async upPoda(data) {
    try {
      const { CPTE_VALORSUI, APSA_ID, EMPR_EMPR, CPTE_ANNO, CPTE_MES } = data;
      return await this.costoPodaRepository.query(`
        UPDATE AUCO_PODATECHO SET CPTE_VALORSUI = ${CPTE_VALORSUI} WHERE APSA_ID = ${APSA_ID} AND EMPR_EMPR = ${EMPR_EMPR} AND CPTE_ANNO =${CPTE_ANNO} AND CPTE_MES = ${CPTE_MES}
        `);

    } catch (error) {
      console.log("error upPoda", error)
    }
  }

}
