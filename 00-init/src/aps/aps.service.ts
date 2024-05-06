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

  async createAps(createApsDTO: CreateApsDTO) {
    try {
      const aps = this.apsRepository.create(createApsDTO);
      await this.apsRepository.save(aps);
      return aps;
    } catch (error) {
      console.log(error);
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

    const updateResult = await this.apsRepository.update(
      { APSA_ID: APSA_ID },
      {
        APSA_NOMAPS,
        APSA_ESTADO,
        APSA_PROPIO,
        APSA_RESOLUCION,
        APSA_SOLORELL,
        APSA_VIAT,
        APSA_IDSUI,
      },
    );

    return updateResult;
  }

  async deleteAps(id: number) {
    const updateResult = await this.apsRepository.update(
      { APSA_ID: id },
      { APSA_ESTADO: 0 },
    );

    return updateResult;
  }
}
