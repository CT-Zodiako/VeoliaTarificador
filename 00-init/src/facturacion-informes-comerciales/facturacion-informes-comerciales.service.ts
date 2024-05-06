import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacuo_detafacturacion } from './entities/facturacion-informes-comerciale.entity';
import { Repository } from 'typeorm';
import { ConsultaDTO } from './dto/consulta-facturacion-informes-comerciale.dto';

@Injectable()
export class FacturacionInformesComercialesService {
  constructor(
    @InjectRepository(Vacuo_detafacturacion)
    private readonly facturacionRepository: Repository<Vacuo_detafacturacion>,
  ) {}
  async facturacion(consultaDTO: ConsultaDTO) {
    const { APS_ID, ANNO, MES } = consultaDTO;
    return await this.facturacionRepository.query(
      `SELECT * FROM VACUO_FACTURACION WHERE APSA_ID = ${APS_ID} AND TARI_ANNO = ${ANNO} AND TARI_MES = ${MES}`,
    );
  }

  async facturacionDetalle(consultaDTO:ConsultaDTO){
    const { APS_ID, ANNO, MES } = consultaDTO;
    return await this.facturacionRepository.query(
      `SELECT * FROM VACUO_DETAFACTURACION WHERE APSA_ID = ${APS_ID} AND RETA_ANNO = ${ANNO} AND RETA_MES = ${MES}`,
    );
  }

  async facturacionClus(consultaDTO:ConsultaDTO){
    const { APS_ID, ANNO, MES } = consultaDTO;
    return await this.facturacionRepository.query(
      `SELECT * FROM VACUO_FACTURACIONCLUS WHERE APSA_ID = ${APS_ID} AND TARI_ANNO = ${ANNO} AND TARI_MES = ${MES}`
    );
  }

  async facturacionDinc(consultaDTO:ConsultaDTO){
    const { APS_ID, ANNO, MES } = consultaDTO;
    return await this.facturacionRepository.query(
      `SELECT * FROM VACUO_FACTURACIONDINC WHERE APSA_ID = ${APS_ID} AND TARI_ANNO = ${ANNO} AND TARI_MES = ${MES}`
    );
  }
  
}
