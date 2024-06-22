import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { entityVerificacion } from './entities/verificacion.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class VerificacionService {


  constructor(
    @InjectRepository(entityVerificacion)
    private readonly verificacionRepository: Repository<entityVerificacion>,
  ) {}
  

  async resumenEmpresa(data) {
    try {

      const { APSA_ID, INED_ANNO, INED_MES } = data;
      return await this.verificacionRepository.query(
        `
        SELECT ae.EMPR_NOMBRE, ai.* FROM AUCO_INFOEMPRDIVI ai JOIN AUCO_APSEMPRDIVI aa ON aa.EMPR_EMPR = ai.EMPR_EMPR AND ai.DIVI_DIVI = aa.DIVI_DIVI JOIN AUGE_EMPRESAS ae ON ae.EMPR_EMPR = ai.EMPR_EMPR WHERE aa.APSA_ID = ${APSA_ID} AND ai.INED_ANNO =${INED_ANNO} AND ai.INED_MES =${INED_MES} ORDER BY ae.EMPR_NOMBRE
        `
      )
    } catch (error) {
     console.log('error en resumenEmpresa: ', error) 
    }
  }

  async resumenAPS(data) {
    try {
      const { APSA_ID, INED_ANNO, INED_MES } = data;
      return await this.verificacionRepository.query(
        `
        SELECT ae.EMPR_NOMBRE, ad.DIVI_NOMBRE, ai.* FROM AUCO_INFOAPSEMPRDIVI ai JOIN AUGE_EMPRESAS ae ON ae.EMPR_EMPR = ai.EMPR_EMPR JOIN AUGE_DIVIPOLI ad ON ad.DIVI_DIVI = ai.DIVI_DIVI WHERE APSA_ID = ${APSA_ID} AND IAED_ANNO = ${INED_ANNO} AND IAED_MES = ${INED_MES} ORDER BY EMPR_NOMBRE, DIVI_NOMBRE
        `
      )
      
    } catch (error) {
      console.log('error en resumenAPS: ', error)
    }
  }

  async resumenRelleno(data) {
    try {
      const { APSA_ID, INED_ANNO, INED_MES } = data;
      return await this.verificacionRepository.query(
        `
        SELECT aa.RELL_NOMRELLENO , ai.* FROM AUCO_INFOAPSRELLENO ai JOIN AUCO_RELLENOS aa ON ai.RELL_ID = aa.RELL_ID WHERE RELL_ESTADO = 1 AND ai.APSA_ID = ${APSA_ID} AND ai.IARE_ANNO = ${INED_ANNO} AND ai.IARE_MES = ${INED_MES} ORDER BY aa.RELL_NOMRELLENO
        `
      )
    } catch (error) {
      
    }
  }
}
