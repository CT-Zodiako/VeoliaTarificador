import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacuo_detafacturacion } from './entities/facturacion-informes-comerciale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FacturacionInformesComercialesService {
  constructor(
    @InjectRepository(Vacuo_detafacturacion)
    private readonly facturacionRepository: Repository<Vacuo_detafacturacion>,
  ) {}
  async facturacion(consultaDTO) {
    const { APS_ID, ANNO, MES } = consultaDTO;
    return await this.facturacionRepository.query(
      `SELECT * FROM VACUO_FACTURACION WHERE APSA_ID = ${APS_ID} AND TARI_ANNO = ${ANNO} AND TARI_MES = ${MES}`,
    );
  }

  async facturacionDetalle(consultaDTO){
    const { APS_ID, ANNO, MES } = consultaDTO;
    return await this.facturacionRepository.query(
      `SELECT * FROM VACUO_DETAFACTURACION WHERE APSA_ID = ${APS_ID} AND RETA_ANNO = ${ANNO} AND RETA_MES = ${MES}`,
    );
  }

  async facturacionClus(consultaDTO){
    const { APS_ID, ANNO, MES } = consultaDTO;
    return await this.facturacionRepository.query(
      `SELECT * FROM VACUO_FACTURACIONCLUS WHERE APSA_ID = ${APS_ID} AND TARI_ANNO = ${ANNO} AND TARI_MES = ${MES}`
    );
  }

  async facturacionDinc(consultaDTO){
    const { APS_ID, ANNO, MES } = consultaDTO;
    return await this.facturacionRepository.query(
      `SELECT * FROM VACUO_FACTURACIONDINC WHERE APSA_ID = ${APS_ID} AND TARI_ANNO = ${ANNO} AND TARI_MES = ${MES}`
    );
  }
  
}
