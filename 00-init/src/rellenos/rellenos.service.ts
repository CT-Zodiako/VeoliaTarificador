import { Injectable } from '@nestjs/common';
import { CreateRellenoDTO } from '../rellenos/dto/create-relleno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AucoRellenos } from './entities/relleno.entity';
import { Repository } from 'typeorm';
import { UpDataDTO } from './dto/update-relleno.dto';

@Injectable()
export class RellenosService {
  constructor(
    @InjectRepository(AucoRellenos)
    private readonly rellenoRepository: Repository<AucoRellenos>,
  ) {}

  async create(createRellenoDTO: CreateRellenoDTO, SISU_ID) {
    try {
      console.log(createRellenoDTO)
      const {
        RELL_ESTADO,
        RELL_NOMRELLENO,
        RELL_NUSD,
        RELL_PROPIO,
        RELL_REGIONAL,
      } = createRellenoDTO;

      const queryInsert = `
        INSERT INTO TARIFICADOR.AUCO_RELLENOS
        (RELL_ID, RELL_NOMRELLENO, RELL_DESCRIPCION, RELL_ESTADO, RELL_PROPIO, RELL_FECHACREACION, RELL_REGIONAL, USUA_USUA, RELL_NUSD)
        VALUES(SAUCO_RELLENOS.nextval, '${RELL_NOMRELLENO}', '-', ${RELL_ESTADO} , ${RELL_PROPIO} , sysdate, ${RELL_REGIONAL} , ${SISU_ID} , '${RELL_NUSD}')
        `;

      return await this.rellenoRepository.query(queryInsert);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    return await this.rellenoRepository.find({
      order: {
        RELL_NOMRELLENO: 'ASC',
      },
    });
  }

  async findOne(RELL_ID: number) {
    return await this.rellenoRepository.findBy({
      RELL_ID: RELL_ID,
    });
  }

  async remove(RELL_ID: number) {
    return await this.rellenoRepository.update(
      { RELL_ID: RELL_ID },
      {
        RELL_ESTADO: 0,
      },
    );
  }

  async upData(SISU_ID: number, upDataDTO) {
    const {RELL_NOMRELLENO,RELL_ESTADO,RELL_PROPIO,RELL_REGIONAL,RELL_NUSD,RELL_ID} = upDataDTO
    try {
        console.log(upDataDTO, SISU_ID);
        const query = `
          UPDATE TARIFICADOR.AUCO_RELLENOS
          SET RELL_NOMRELLENO='${RELL_NOMRELLENO}', RELL_DESCRIPCION='-', RELL_ESTADO=${RELL_ESTADO} , RELL_PROPIO=${RELL_PROPIO} , RELL_FECHACREACION=sysdate, RELL_REGIONAL=${RELL_REGIONAL} , USUA_USUA=${SISU_ID} , RELL_NUSD= '${RELL_NUSD}'
          WHERE RELL_ID=${RELL_ID}
        `

        return await this.rellenoRepository.query(query);

    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar el relleno');
    }
}

}
