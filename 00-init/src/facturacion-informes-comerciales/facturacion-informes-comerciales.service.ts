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

  async historialCertificacion(data, usuario){
   try {
    const {anno,mes} = data;

    return await this.facturacionRepository.query(`
      SELECT 
      *
      FROM 
        vauco_certintarifas
      WHERE 
        tace_anno = :1 
        AND tace_mes = :2 
        AND codaps IN (SELECT AU.apsa_id FROM auco_apsusuarios AU WHERE au.sisu_id = :3)
    `, [anno,mes,usuario]);

   } catch (error) {
     return `error al historialCertificacion: ${error}`
    
   }
  }

  async historialProductividad(data, usuario){
   try {
    const {anno,mes} = data;

    return await this.facturacionRepository.query(`
      select * 
        from vauco_productividad
      where pr22_anno = :1 and pr22_mes = :2 
          and codaps in (SELECT AU.apsa_id FROM auco_apsusuarios AU WHERE au.sisu_id = :3)
      order by 3,5,7
    `, [anno,mes,usuario]);

   } catch (error) {
     return `error al historialProductividad: ${error}`
    
   }
  }
  
}
