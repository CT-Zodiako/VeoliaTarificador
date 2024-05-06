import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AucoApsaseo } from './entities/detallado-tarifa.entity';
import { Repository } from 'typeorm';
import { ConsultaDTO } from './dto/consulta.dto';

@Injectable()
export class DetalladoTarifasService {
  constructor(
    @InjectRepository(AucoApsaseo)
    private readonly detalladotarifasRepository: Repository<AucoApsaseo>,
  ) {}

  async findOne(consultaDTO: ConsultaDTO) {
    const { ANNO, MES } = consultaDTO;
    return await this.detalladotarifasRepository.query(`
    SELECT A.apsa_nomaps, C.* FROM vauco_tardetalle C INNER JOIN auco_apsaseo A ON (c.APSA_ID = A.apsa_id) WHERE TARI_ANNO = ${ANNO} AND TARI_MES = ${MES}
    `);
  }
}
