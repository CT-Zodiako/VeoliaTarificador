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
  async getVariablesPgirs(Body){
    const {APSA_ID,ANNO,MES}=Body;
    return await this.pgrisRepository.query(`
      SELECt * FROM vpirg_parametros WHERE APSAID = ${APSA_ID} AND PGRIANNO = ${ANNO} AND PGRIMES = ${MES}
    `)
  }

  async createVaraible(createVaraible,SISU_ID){
    const {aps,anno,mes,data}=createVaraible;
    console.log(data[0])
    console.log(data[1])

    // for (let i = 0; i < data.length; i++) {
    //   const {variable,valor,frecuencia}=data[i];
    //   await this.pgrisRepository.query(`
    //   INSERT INTO TARIFICADOR.PGRI_PARAMETROS
    //   (APSAID, PGRIANNO, PGRIMES, PGRIVARIABLE, PGRIVALOR, PGRIFRECUENCIA, PGRIFECHA, PGRIUSUARIO)
    // VALUES
    //   (${aps}, ${anno}, ${mes}, ${variable}, ${valor}, ${frecuencia}, SYSDATE, ${SISU_ID})
    //   `)
    // }


  //   return this.pgrisRepository.query(`
  //   INSERT INTO TARIFICADOR.PGRI_PARAMETROS
  //   (APSAID, PGRIANNO, PGRIMES, PGRIVARIABLE, PGRIVALOR, PGRIFRECUENCIA, PGRIFECHA, PGRIUSUARIO)
  // VALUES
  //   (${APSAID}, ${PGRIANNO}, ${PGRIMES}, ${PGRIVARIABLE}, ${PGRIVALOR}, ${PGRIFRECUENCIA}, SYSDATE, ${SISU_ID})
  //   `)
  }
}
