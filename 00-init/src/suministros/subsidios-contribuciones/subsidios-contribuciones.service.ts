import { Injectable } from '@nestjs/common';
import { CreateSubsidiosContribucioneDto } from './dto/create-subsidios-contribucione.dto';
import { UpdateSubsidiosContribucioneDTO } from './dto/update-subsidios-contribucione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AucoApssubscont } from './entities/subsidios-contribucione.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubsidiosContribucionesService {
  constructor(
    @InjectRepository(AucoApssubscont)
    private readonly subsidiosContribucionesRepository: Repository<AucoApssubscont>,
  ) {}

  async create(
    createSubsidiosContribucioneDto: CreateSubsidiosContribucioneDto,
    SISU_ID: number,
  ) {
    const {
      APSA_ID,
      CLAS_CLASE,
      DIVI_DIVI,
      PARA_TIPPRED20016,
      SUCO_ANNO,
      SUCO_ESTADO,
      SUCO_MES,
      SUCO_VALOR,
    } = createSubsidiosContribucioneDto;

    const prev = await this.subsidiosContribucionesRepository.query(`
    SELECT * FROM AUCO_APSEMPRDIVI where APSA_ID = ${APSA_ID} AND APEM_ESTADO = 1
    `);

    return await this.subsidiosContribucionesRepository.query(`
    INSERT INTO AUCO_APSSUBSCONT (SUCO_ID, APSA_ID, EMPR_EMPR, DIVI_DIVI, CLAS_CLASE, SUCO_ANNO, SUCO_MES, PARA_TIPPRED20016, SUCO_VALOR, SUCO_ESTADO, SUCO_FECHACREACION, USUA_USUA)
    VALUES(SAUCO_APSSUBSCONT.NEXTVAL, ${APSA_ID}, ${prev[0].EMPR_EMPR}, ${DIVI_DIVI}, ${CLAS_CLASE}, ${SUCO_ANNO}, ${SUCO_MES}, ${PARA_TIPPRED20016}, ${SUCO_VALOR}, ${SUCO_ESTADO}, CURRENT_DATE, ${SISU_ID})
    `);
  }

  async findOne(APSA_ID: number, SUCO_ANNO: number, SUCO_MES: number) {
    return await this.subsidiosContribucionesRepository.findBy({
      APSA_ID,
      SUCO_ANNO,
      SUCO_MES,
    });
  }

  async update(
    updateSubsidiosContribucioneDto,
  ) {
    console.log(updateSubsidiosContribucioneDto);

    for (const element of updateSubsidiosContribucioneDto) {
      await this.subsidiosContribucionesRepository.query(`
        UPDATE AUCO_APSSUBSCONT SET suco_valor = ${element.SUCO_VALOR} WHERE apsa_id = ${element.APSA_ID} AND suco_anno = ${element.SUCO_ANNO} AND suco_mes = ${element.SUCO_MES} AND CLAS_CLASE = ${element.CLAS_CLASE}
      `);
    }

    return 'ok'
  }
}
