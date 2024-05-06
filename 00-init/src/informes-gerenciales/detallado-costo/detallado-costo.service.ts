import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AucoApsaseo } from './entities/detallado-costo.entity';
import { Repository } from 'typeorm';
import { ConsultaDTO } from './dto/consulta.dto';

@Injectable()
export class DetalladoCostoService {
  constructor(
    @InjectRepository(AucoApsaseo)
    private readonly detalladoCostoRepository: Repository<AucoApsaseo>,
  ) {}

  async findOne(consultaDTO: ConsultaDTO) {
    const { ANNO, MES } = consultaDTO;
    return await this.detalladoCostoRepository.query(`
    SELECT A.apsa_nomaps, C.* 
    FROM vauco_costos C 
         INNER JOIN auco_apsaseo A ON (c.apscosto = A.apsa_id)
    WHERE c.annocosto = ${ANNO} AND c.mescosto = ${MES}
    `);
  }
}
