import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vpgirs } from './entities/resumen-variables-pgir.entity';
import { Repository } from 'typeorm';
import { ConsultaDTO } from './dto/consulta.dto';

@Injectable()
export class ResumenVariablesPgirsService {

  constructor(
    @InjectRepository(Vpgirs)
    private readonly pgirsRepository:Repository<Vpgirs>
  ){

  }
  async resumenVariables(consultaDTO: ConsultaDTO){
    const{APSA_ID}= consultaDTO;
    return await this.pgirsRepository.query(`
      SELECT * FROM vpgir_infvariables  WHERE APSAID = ${APSA_ID}  ORDER BY apsa_nomaps, periodo DESC    
    `)
  }

}
