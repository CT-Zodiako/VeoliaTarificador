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
    try {
      
      const {aps,anno,mes,data}=createVaraible;
  
      const lbl = data[0]
      const cesped = data[1]
      const poda = data[2]
      const lavado = data[3]
      const playas = data[4]
      const inscestas = data[5]
      const mancestas = data[6]
  
      this.pgrisRepository.query(`
        INSERT INTO TARIFICADOR.PGRI_PARAMETROS
        (APSAID, PGRIANNO, PGRIMES, PGRIVARIABLE, PGRIVALOR, PGRIFRECUENCIA, PGRIFECHA, PGRIUSUARIO)
        VALUES
        (${aps}, ${anno}, ${mes}, ${lbl.PGRIVARIABLE}, ${lbl.LBL}, ${lbl.selectorLBL}, SYSDATE, ${SISU_ID})
      `)

      this.pgrisRepository.query(`
        INSERT INTO TARIFICADOR.PGRI_PARAMETROS
        (APSAID, PGRIANNO, PGRIMES, PGRIVARIABLE, PGRIVALOR, PGRIFRECUENCIA, PGRIFECHA, PGRIUSUARIO)
        VALUES
        (${aps}, ${anno}, ${mes}, ${cesped.PGRIVARIABLE}, ${cesped.CESPED}, ${cesped.selectorCESPED}, SYSDATE, ${SISU_ID})
      `)

      this.pgrisRepository.query(`
        INSERT INTO TARIFICADOR.PGRI_PARAMETROS
        (APSAID, PGRIANNO, PGRIMES, PGRIVARIABLE, PGRIVALOR, PGRIFRECUENCIA, PGRIFECHA, PGRIUSUARIO)
        VALUES
        (${aps}, ${anno}, ${mes}, ${poda.PGRIVARIABLE}, ${poda.PODA}, ${poda.selectorPODA}, SYSDATE, ${SISU_ID})
      `)

      this.pgrisRepository.query(`
        INSERT INTO TARIFICADOR.PGRI_PARAMETROS
        (APSAID, PGRIANNO, PGRIMES, PGRIVARIABLE, PGRIVALOR, PGRIFRECUENCIA, PGRIFECHA, PGRIUSUARIO)
        VALUES
        (${aps}, ${anno}, ${mes}, ${lavado.PGRIVARIABLE}, ${lavado.LAVADO}, ${lavado.selectorLAVADO}, SYSDATE, ${SISU_ID})
      `)

      this.pgrisRepository.query(`
        INSERT INTO TARIFICADOR.PGRI_PARAMETROS
        (APSAID, PGRIANNO, PGRIMES, PGRIVARIABLE, PGRIVALOR, PGRIFRECUENCIA, PGRIFECHA, PGRIUSUARIO)
        VALUES
        (${aps}, ${anno}, ${mes}, ${playas.PGRIVARIABLE}, ${playas.PLAYAS}, ${playas.selectorPLAYAS}, SYSDATE, ${SISU_ID})
      `)

      this.pgrisRepository.query(`
        INSERT INTO TARIFICADOR.PGRI_PARAMETROS
        (APSAID, PGRIANNO, PGRIMES, PGRIVARIABLE, PGRIVALOR, PGRIFRECUENCIA, PGRIFECHA, PGRIUSUARIO)
        VALUES
        (${aps}, ${anno}, ${mes}, ${inscestas.PGRIVARIABLE}, ${inscestas.INSCESTAS}, ${inscestas.selectorINSCESTAS}, SYSDATE, ${SISU_ID})
      `)

      this.pgrisRepository.query(`
        INSERT INTO TARIFICADOR.PGRI_PARAMETROS
        (APSAID, PGRIANNO, PGRIMES, PGRIVARIABLE, PGRIVALOR, PGRIFRECUENCIA, PGRIFECHA, PGRIUSUARIO)
        VALUES
        (${aps}, ${anno}, ${mes}, ${mancestas.PGRIVARIABLE}, ${mancestas.MANCESTAS}, ${mancestas.selectorMANCESTAS}, SYSDATE, ${SISU_ID})
      `)

      return 'Variables creadas correctamente'

      
    } catch (error) {
      console.log('Error en crear variables',error)
      
    }



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
