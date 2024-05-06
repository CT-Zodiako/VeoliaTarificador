import { Injectable } from '@nestjs/common';
import { CreateIndicesCraDto } from './dto/create-indices-cra.dto';
import { UpdateIndicesCraDTO } from './dto/update-indices-cra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AucoIndicescra } from './entities/indices-cra.entity';

@Injectable()
export class IndicesCraService {
  constructor(
    @InjectRepository(AucoIndicescra)
    private readonly indicesRepository: Repository<AucoIndicescra>,
  ) {}

  async create(createIndicesCraDto: CreateIndicesCraDto, SISU_ID: number) {
    console.log(createIndicesCraDto);
    console.log(SISU_ID);
    const {
      INDI_ANNO,
      INDI_ESTADO,
      INDI_MES,
      INDI_MITADVALOR,
      PARA_INDICE20011,
      INDI_VALOR,
    } = createIndicesCraDto;
    return await this.indicesRepository.query(`
    INSERT INTO TARIFICADOR.AUCO_INDICESCRA
    (INDI_ID, PARA_INDICE20011, INDI_ANNO, INDI_MES, INDI_ESTADO, INDI_VALOR, INDI_MITADVALOR, INDI_FECHACREACION, USUA_USUA)
    VALUES(sauco_indicescra.nextval, ${PARA_INDICE20011}, ${INDI_ANNO}, ${INDI_MES}, ${INDI_ESTADO} , ${INDI_VALOR}, ${INDI_MITADVALOR}/2, sysdate, ${SISU_ID})`);
  }

  async findAll() {
    return await this.indicesRepository.query(`
    SELECT * FROM auco_indicescra WHERE indi_estado = 1     
    `);
  }

  async findOne(INDI_ANNO: number, INDI_MES: number) {
    const result = await this.indicesRepository.query(`
    SELECT INDI_ID, PARA_INDICE20011, INDI_ANNO, INDI_MES, INDI_ESTADO, TO_CHAR(INDI_VALOR) AS INDI_VALOR, TO_CHAR(INDI_MITADVALOR) AS INDI_MITADVALOR, INDI_FECHACREACION, USUA_USUA FROM auco_indicescra WHERE indi_anno = ${INDI_ANNO} AND indi_mes = ${INDI_MES} and indi_estado = 1
    `);

    return result[0];
  }

  async update(updateIndicesCraDTO: UpdateIndicesCraDTO) {
    const {
      INDI_ANNO,
      INDI_MES,
      INDI_MITADVALOR,
      INDI_VALOR,
      PARA_INDICE20011,
    } = updateIndicesCraDTO;
    return await this.indicesRepository.update(
      {
        PARA_INDICE20011: PARA_INDICE20011,
        INDI_ANNO: INDI_ANNO,
        INDI_MES,
      },
      {
        INDI_VALOR: INDI_VALOR,
        INDI_MITADVALOR: INDI_MITADVALOR / 2,
      },
    );
  }

  async remove(PARA_INDICE: number, INDI_ANNO: number, INDI_MES: number) {
    return await this.indicesRepository.update(
      {
        PARA_INDICE20011: PARA_INDICE,
        INDI_ANNO: INDI_ANNO,
        INDI_MES: INDI_MES,
      },

      {
        INDI_ESTADO: 0,
      },
    );
  }
}
