import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Revercione } from './entities/revercione.entity';
import { DataSource, Repository } from 'typeorm';


@Injectable()
export class RevercionesService {


  constructor(
    @InjectRepository(Revercione)
    private readonly revercionesRepository:Repository<Revercione>,
    private readonly dataSource: DataSource
  ) {}


  async crearAutorizacion(user,data) {
    try {
      const {APSA_ID,ANNO,MES,DESCRIPCION} =data;
      console.log('data', APSA_ID,ANNO,MES,DESCRIPCION);
            
      return await this.revercionesRepository.query(`
        INSERT INTO TARIFICADOR.REVE_AUTORIZACION
        (APSA_ID, AUTO_ANNO, AUTO_MES, AUTO_DESCRIPCION, AUTO_FECCREA, USUA_USUARIO)
        VALUES(${APSA_ID}, ${ANNO}, ${MES}, '${DESCRIPCION}', SYSDATE , ${user})
      `)

    } catch (error) {
      console.log('Error en crearAutorizacion',error)
    }
  }


  async detalladoAutorizacion(user) {
    try {
      return await this.revercionesRepository.query(`
        SELECT * FROM vreve_autorizacion
        WHERE SISU_ID = ${user}
        ORDER BY 2 DESC, 3 DESC, 1
      `)
    } catch (error) {
      console.log('Error en detalladoAutorizacion',error)
    }
  }
  async detalladoReversion() {
    try {
      return await this.revercionesRepository.query(`
        SELECT AA.APSA_NOMAPS, REVE_ANNO, REVE_MES, REVE_MOTIVO, AR.APSA_FECHACREACION, AS2.SISU_CORREO 
        FROM AUCO_REVERSIONES ar JOIN AUGE_SISUSUARIO as2 ON AR.USUA_USUA = SISU_ID JOIN AUCO_APSASEO aa ON AA.APSA_ID = AR.APSA_ID 
        WHERE AS2.SISU_ID NOT IN (9, 4) ORDER BY 2 DESC, 3 DESC, 1
      `)
    } catch (error) {
      console.log('Error en detalladoReversion',error)
    }
  }
 
  async crearReversion(data, user): Promise<any> {

    const {APSA_ID, ANNO, MES, VALOR} = data;

    const queryRunner = this.dataSource.createQueryRunner(); 
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();
      
      const result = await queryRunner.query(`
        DECLARE
          res NUMBER;
        BEGIN
          res := PK_REVERSION.fauco_reversion(:1, :2, :3, :4, :5);
          COMMIT;
        END;
      `, [APSA_ID, ANNO, MES, VALOR, user]);


      await queryRunner.commitTransaction();

      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }


}
