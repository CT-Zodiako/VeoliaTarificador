import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AucoApsaseo } from './entities/detallado-sub-aporte.entity';
import { Repository } from 'typeorm';
import { ConsultaDTO } from './dto/consulta.dto';

@Injectable()
export class DetalladoSubAporteService {

  constructor(
    @InjectRepository(AucoApsaseo)
    private readonly detalladoSubAporteRepository: Repository<AucoApsaseo>
  ){

  }

  async findOne(consultaDTO:ConsultaDTO) {
    const {ANNO,MES}= consultaDTO
    return await this.detalladoSubAporteRepository.query(`
    SELECT S.*, P.PARA_NOMBRE FROM 
    vauco_subsaport S INNER JOIN AUGE_PARAMETROS P ON(S.PARA_TIPPRED20016 = P.PARA_PARA AND P.CLAS_CLAS = 20016)
    WHERE suco_anno = ${ANNO} AND suco_mes = ${MES} AND SUCO_ESTADO = 1
    `)
  }

}
