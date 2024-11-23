import { Injectable } from '@nestjs/common';
import { UpdateProyectarDto } from './dto/update-proyectar.dto';
import { ProyProyeccion } from './entities/proyectar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProyectarService {
  constructor(
    @InjectRepository(ProyProyeccion)
    private readonly proyectarRepository: Repository<ProyProyeccion>,
    private readonly dataSource: DataSource
  ) {}

  async ejecutarProyectar(data, usuario): Promise<number> {
    const { proy_id, apsa_id } = data;
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
  
    try {
      // Ejecutar bloque PL/SQL con parámetros
      const result = await queryRunner.query(
        `
        DECLARE
          res NUMBER;
        BEGIN
          res := PK_PROYLIQUIDA.fproy_proyectar(:1, :2, :3);
          :4 := res;
          COMMIT;
        END;
        `,
        [
          proy_id,           // Parámetro en la posición :1
          apsa_id,           // Parámetro en la posición :2
          usuario,           // Parámetro en la posición :3
          { dir: 3003 }, // Parámetro de salida (3003 = BIND_OUT)
        ],
      );
  
      await queryRunner.commitTransaction();
      return result.outBinds[0]; // Recupera el valor del parámetro de salida
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error('Error en ejecutarProyectar:', error);
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async consultarProyeccionId(data) {
    try {
      const { proyid } = data;
      const proyeccion = await this.proyectarRepository.query(
        `SELECT * FROM PROY_DETLINEATIEMPO WHERE PROYID = :1 ORDER BY PROYANNO, PROYMES`,
        [proyid],
      );
      return proyeccion;
    } catch (error) {
      return console.log(`error en consultarProyeccionId ${error}`);
    }
  }

  async consultarProyeccionUsuario(data) {
    try {
      const { proyid } = data;
      const proyeccion = await this.proyectarRepository.query(
        `SELECT * FROM PROY_USUARIOS WHERE PROY_ID = :1 ORDER BY ANNO, SEMESTRE , CODTIPOPRED , CODUSO`,
        [proyid],
      );
      return proyeccion;
    } catch (error) {
      return console.log(`error en consultarProyeccionUsuario ${error}`);
    }
  }

  async consultarProyeccionInfoPropia(data) {
    try {
      const { proyid } = data;
      const proyeccion = await this.proyectarRepository.query(
        `SELECT * FROM PROY_PROPIA WHERE PROY_ID = :1 ORDER BY ANNO, MES`,
        [proyid],
      );
      return proyeccion;
    } catch (error) {
      return console.log(`error en consultarProyeccionInfoPropia ${error}`);
    }
  }

  async consultarProyeccionInfoTercero(data) {
    try {
      const { proyid } = data;
      const proyeccion = await this.proyectarRepository.query(
        `SELECT * FROM PROY_COMPETIDOR WHERE PROY_ID = :1 ORDER BY COD_EMPRESA, ANNO, MES`,
        [proyid],
      );
      return proyeccion;
    } catch (error) {
      return console.log(`error en consultarProyeccionInfoTercero ${error}`);
    }
  }


}
