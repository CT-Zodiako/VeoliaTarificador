import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProyProyeccion } from './entities/subsidios-contribucione.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubsidiosContribucionesService {


  constructor(
    @InjectRepository(ProyProyeccion)
    private subsidiosContribucionesRepository: Repository<ProyProyeccion>
  ) {}


  async consultaSubCon(data) {
    try {
      const {APSA_ID, PROY_ID, SUCO_ANNO, SUCO_MES,} = data;

      return await this.subsidiosContribucionesRepository.query(`
        SELECT CLAS_CLASE , SUCO_VALOR FROM PROY_APSSUBSCONT WHERE APSA_ID = :1 AND PROY_ID = :2 AND  SUCO_ANNO = :3 AND SUCO_MES  = :4`
      ,[APSA_ID, PROY_ID, SUCO_ANNO, SUCO_MES]);

      
    } catch (error) {
      return 'Error en la consulta de subsidios y contribuciones';
    }
  }


}
