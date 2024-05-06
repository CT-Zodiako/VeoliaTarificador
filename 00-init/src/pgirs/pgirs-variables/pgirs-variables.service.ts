import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vpgirs } from './entities/pgirs-variable.entity';
import { ConsultaDTO } from './dto/consulta.dto';
import { CrearDTO } from './dto/crear.dto';

@Injectable()
export class PgirsVariablesService {

  constructor(
    @InjectRepository(Vpgirs)
    private readonly pgrisRepository: Repository<Vpgirs>
  ){
    
  }
  async getVariablesPgirs(consultaDTO:ConsultaDTO){
    console.log(consultaDTO)
    const{ANNO,APSA_ID,MES}=consultaDTO
    return await this.pgrisRepository.query(`
      SELECt * FROM vpirg_parametros WHERE APSAID = ${APSA_ID} AND PGRIANNO = ${ANNO} AND PGRIMES = ${MES}
    `)
  }

  async createVaraible(createDTO:CrearDTO,SISU_ID){
    const {APSAID,PGRIANNO,PGRIFRECUENCIA,PGRIMES,PGRIVALOR,PGRIVARIABLE}=createDTO;
    return this.pgrisRepository.query(`
    INSERT INTO TARIFICADOR.PGRI_PARAMETROS
    (APSAID, PGRIANNO, PGRIMES, PGRIVARIABLE, PGRIVALOR, PGRIFRECUENCIA, PGRIFECHA, PGRIUSUARIO)
  VALUES
    (${APSAID}, ${PGRIANNO}, ${PGRIMES}, ${PGRIVARIABLE}, ${PGRIVALOR}, ${PGRIFRECUENCIA}, SYSDATE, ${SISU_ID})
    `)
  }
}
