import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateApsDTO } from './dto/create-aps.dto';
import { UpdateApDto } from './dto/update-aps.dto';
import { Repository } from 'typeorm';
import { Aps } from './entities/aps.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ApsService {
  constructor(
    @InjectRepository(Aps)
    private readonly apsRepository: Repository<Aps>,
  ) {}

  async createAps(createApsDTO: CreateApsDTO, sisuId: number) {
    try {
      const {
        APSA_ESTADO,
        APSA_IDSUI,
        APSA_NOMAPS,
        APSA_PROPIO,
        APSA_RESOLUCION,
        APSA_SOLORELL,
      } = createApsDTO;
  
      const query = `
        INSERT INTO AUCO_APSASEO (
          APSA_ID, APSA_NOMAPS, APSA_FECHACREACION, APSA_PROPIO, USUA_USUA, 
          APSA_RESOLUCION, APSA_SOLORELL, APSA_ESTADO, APSA_IDSUI
        ) VALUES (
          SAUCO_APSASEO.nextval, :APSA_NOMAPS, sysdate, :APSA_PROPIO, :sisuId, 
          :APSA_RESOLUCION, :APSA_SOLORELL, :APSA_ESTADO, :APSA_IDSUI
        )
      `;
  
      const response = await this.apsRepository.query(query, [
        APSA_NOMAPS,
        APSA_PROPIO,
        sisuId,
        APSA_RESOLUCION,
        APSA_SOLORELL,
        APSA_ESTADO,
        APSA_IDSUI,
      ]);
  
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  
  async findOneAps(apsaId: number) {
    try {
      const aps = await this.apsRepository.query(
        `SELECT * FROM AUCO_APSASEO WHERE APSA_ID = ${apsaId}`,
      );

      return aps;
    } catch (error) {
      console.log(error);
    }
  }

  async findApsByEstado() {
    try {
      const result = await this.apsRepository.findBy({ APSA_ESTADO: 1 });

      return result
    } catch (error) {
      throw new InternalServerErrorException('Error al traer aps');
    }
  }

  async findAllAps() {
    try {
      return await this.apsRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findApsByUser(sisuId: number) {
    try {
      const apsByUser = await this.apsRepository.query(`
      SELECT * FROM auco_apsaseo WHERE APSA_ID IN (SELECT APSA_ID FROM AUCO_APSUSUARIOS WHERE SISU_ID = ${sisuId} AND APSI_ESTADO = 1) AND apsa_estado = 1 ORDER BY APSA_NOMAPS
    `);

      return apsByUser;
    } catch (error) {
      console.log(error);
    }
  }

  async updataAps(updateApDto: UpdateApDto) {
    console.log(updateApDto)
    const {
      APSA_ESTADO,
      APSA_ID,
      APSA_IDSUI,
      APSA_NOMAPS,
      APSA_PROPIO,
      APSA_RESOLUCION,
      APSA_SOLORELL,
      APSA_VIAT,
    } = updateApDto;

    const updateResult = await this.apsRepository.query(
      `UPDATE AUCO_APSASEO SET APSA_NOMAPS = '${APSA_NOMAPS}', APSA_ESTADO = ${APSA_ESTADO}, APSA_PROPIO = ${APSA_PROPIO}, APSA_RESOLUCION = ${APSA_RESOLUCION}, APSA_SOLORELL = ${APSA_SOLORELL}, APSA_VIAT = ${APSA_VIAT}, APSA_IDSUI = ${APSA_IDSUI} WHERE APSA_ID = ${APSA_ID}
      `,)


      return updateResult;

    }
  //   .update(
      
  //     { APSA_ID: APSA_ID },
  //     {
  //       APSA_NOMAPS,
  //       APSA_ESTADO,
  //       APSA_PROPIO,
  //       APSA_RESOLUCION,
  //       APSA_SOLORELL,
  //       APSA_VIAT,
  //       APSA_IDSUI,
  //     },
  //   );

  //   return updateResult;
  // }

  async deleteAps(id: number) {
    const updateResult = await this.apsRepository.update(
      { APSA_ID: id },
      { APSA_ESTADO: 0 },
    );

    return updateResult;
  }

  async getApsAsignadas(id:number) {
    const apsAsignadas = await this.apsRepository.query(`
    SELECT aa.* FROM AUCO_APSASEO aa JOIN AUCO_APSUSUARIOS aa2 ON (aa.APSA_ID = aa2.APSA_ID AND aa2.APSI_ESTADO = 1) WHERE aa2.SISU_ID = ${id} AND aa.APSA_ESTADO = 1 ORDER BY aa.APSA_NOMAPS ASC
    `);

    const apsSinAsignar = await this.apsRepository.query(`
    SELECT * FROM AUCO_APSASEO aa WHERE APSA_ID NOT IN (SELECT aa2.APSA_ID FROM AUCO_APSUSUARIOS aa2 WHERE SISU_ID = ${id} AND APSI_ESTADO = 1) AND APSA_ESTADO = 1 ORDER BY aa.APSA_NOMAPS ASC
    `);

    return {
      apsAsignadas,
      apsSinAsignar
  }


  }
}

