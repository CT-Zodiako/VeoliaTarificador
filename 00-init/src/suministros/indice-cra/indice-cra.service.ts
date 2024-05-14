import { Injectable } from '@nestjs/common';
import { ConsultaDTO } from './dto/consulta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IndiceCra } from './entities/indice-cra.entity';
import { Repository } from 'typeorm';
import { CreateIndiceCraDTO } from './dto/create-indice-cra.dto';
import { UpDateIndiceCraDTO } from './dto/update-indice-cra.dto';
@Injectable()
export class IndiceCraService {

  constructor(
    @InjectRepository(IndiceCra)
    private readonly indiceCraRepository: Repository<IndiceCra>

  ){

  }


  async findOne(consultaDTO: ConsultaDTO) {

    try {
      const {ANNO, MES} = consultaDTO;

      return await this.indiceCraRepository.query(`
      SELECT INDI_ID, PARA_INDICE20011, INDI_ANNO, INDI_MES, INDI_ESTADO, TO_CHAR(INDI_VALOR) AS INDI_VALOR, TO_CHAR(INDI_MITADVALOR) AS INDI_MITADVALOR, INDI_FECHACREACION, USUA_USUA FROM auco_indicescra WHERE indi_anno = ${ANNO} AND indi_mes = ${MES} and indi_estado = 1
      `)
      
    } catch (error) {
      console.log(error)
    }
   
  }


  async create(user,createIndiceCraDTO: CreateIndiceCraDTO[]) {
    try {
      createIndiceCraDTO.forEach(async (element) => {
        await this.indiceCraRepository.query(`
        INSERT INTO auco_indicescra VALUES (sauco_indicescra.nextval, ${element.PARA_INDICES20011}, ${element.ANNO}, ${element.MES}, 1, ${element.VALOR}, ${element.VALOR}/2, sysdate, ${user} )
      `)
      });
  
      return {
        message: 'creados IndicesCRA correctamente'
      }
      
    } catch (error) {
      console.log(error)
      
    }
   
  }

  async upDate(upDateIndiceCraDTO: UpDateIndiceCraDTO[]) {
    try {
      upDateIndiceCraDTO.forEach(async (element) => {
        await this.indiceCraRepository.query(`
          UPDATE auco_indicescra SET INDI_VALOR = ${element.VALOR}, INDI_MITADVALOR = ${element.VALOR}/2 WHERE para_indice20011 = ${element.PARA_INDICES20011} AND indi_anno = ${element.ANNO} AND indi_mes = ${element.MES}
        `)
      })

      return{
        message: 'IndicesCRA actualizados correctamente'
      }
  
    } catch (error) {
      console.log(error)
    }


    
  }

}
