import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Proceso } from './entities/proceso.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProcesosService {

  
  constructor(
    @InjectRepository(Proceso)
    private readonly procesosRepository : Repository<Proceso>,
    private readonly dataSource: DataSource
  ) {}

 async  consultaLbl(data) {
    try {
      const {APSA_ID, ANNO, MES} = data;
      return await this.procesosRepository.query(`
        SELECT aps, empresa, mpio, mes, valor 
        FROM vauco_lbl  
        WHERE aps = ${APSA_ID} AND estado = 1 AND anno*12+mes BETWEEN (${ANNO}*12+${MES})-6 AND ${ANNO}*12+${MES}
        `);
    } catch (error) {
      return `error en consultaLbl ${error}`;
    }
  }

 async  consultaUsuarios(data) {
    try {
      const {APSA_ID, ANNO, MES} = data;
      return await this.procesosRepository.query(`
        SELECT aps, empresa, tipo, ROUND(SUM(valor)/6,4) AS valor
        FROM vauco_usuarios
        WHERE aps = ${APSA_ID} AND estado = 1  AND anno*12+mes BETWEEN  (${ANNO}*12+${MES})-6 AND ${ANNO}*12+${MES}
        GROUP BY aps, empresa, tipo
        `);
    } catch (error) {
      return `error en consultaUsuarios ${error}`;
    }
  }

 async  consultaQa(data) {
    try {
      const {APSA_ID, ANNO, MES} = data;
      return await this.procesosRepository.query(`
        SELECT aps, empresa, anno, mes, valor
        FROM vauco_toneladas QA
        WHERE tipo  IN ('QA') AND aps = ${APSA_ID} AND anno*12+mes BETWEEN (${ANNO}*12+${MES})-6 AND ${ANNO}*12+${MES}
        `);
    } catch (error) {
      return `error en consultaQa ${error}`;
    }
  }

 async  consultaQrt(data) {
    try {
      const {APSA_ID, ANNO, MES} = data;
      return await this.procesosRepository.query(`
        SELECT aps, empresa, tipo, ROUND(SUM(valor)/6,4) AS VALOR
        FROM vauco_toneladas QRT
        WHERE tipo NOT IN ('QA','TAFNA') AND aps = ${APSA_ID} AND anno*12+mes BETWEEN  (${ANNO}*12+${MES})-6 AND ${ANNO}*12+${MES}
        GROUP BY aps, empresa, tipo 
        ORDER BY aps, empresa, tipo 
        `);
    } catch (error) {
      return `error en consultaQrt ${error}`;
    }
  }

 async  consultaCostos(data) {
    try {
      const {APSA_ID, ANNO, MES} = data;
      return await this.procesosRepository.query(`
        SELECT * FROM vauco_costos  
        WHERE APSCOSTO = ${APSA_ID} AND ANNOCOSTO = ${ANNO} AND MESCOSTO = ${MES}
        `);
    } catch (error) {
      return `error en consultaCostos ${error}`;
    }
  }

 async  calcularTarifas(user, data) {
    try {
      const {APSA_ID, ANNO, MES} = data;

      const queryRunner = this.dataSource.createQueryRunner(); 
      await queryRunner.connect();
  
      try {
        await queryRunner.startTransaction();
        
        const result = await queryRunner.query(`
          DECLARE
            res NUMBER;
          BEGIN
            res := pk_liquidar.fauco_calculartarifas(:1,:2,:3,:4);
            COMMIT;
          END;
        `, [APSA_ID, MES, ANNO, user]);
  
  
        await queryRunner.commitTransaction();
  
        return result;
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
      } finally {
        await queryRunner.release();
      }
    } catch (error) {
      return `error en calcularTarifas ${error}`;
    }
  }

}
