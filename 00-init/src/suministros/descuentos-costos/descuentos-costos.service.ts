import { Injectable } from '@nestjs/common';
import { CreateDescuentosCostoDto } from './dto/create-descuentos-costo.dto';
import { UpdateDescuentosCostoDto } from './dto/update-descuentos-costo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DescuentoCostosEntity } from './entities/descuentos-costo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DescuentosCostosService {
  constructor(
    @InjectRepository(DescuentoCostosEntity)
    private readonly descuentosCostosRepository: Repository<DescuentoCostosEntity>
  ){

  }
  async create(data, user) {
    const { APSA_ID, DESC_ANNO, DESC_MES, PARA_COSTO20010, DESC_VALOR } = data;
    try {
      return await this.descuentosCostosRepository.query(`
    
        INSERT INTO AUCO_INFOAPSDESCOST VALUES(SAUCO_INFOAPSDESCOST.NEXTVAL, ${APSA_ID}, ${DESC_ANNO}, ${DESC_MES}, ${PARA_COSTO20010}, ${DESC_VALOR}, 1, SYSDATE, ${user})
        
        `)
    } catch (error) {
      console.log('error en crear descuento', error)
    }
  }
  
  async findDescuento(data) {
    try {
      const { APSA_ID, DESC_ANNO, DESC_MES } = data;
      return await this.descuentosCostosRepository.query(`
        SELECT ai.*, ap.PARA_NOMBRE FROM AUCO_INFOAPSDESCOST ai JOIN AUGE_PARAMETROS ap ON ai.PARA_COSTO20010 = ap.PARA_PARA AND ap.CLAS_CLAS = 20010 WHERE ai.APSA_ID = ${APSA_ID} AND ai.DESC_ANNO = ${DESC_ANNO} AND ai.DESC_MES = ${DESC_MES} AND DESC_ESTADO = 1
        `);
      
    } catch (error) {
      console.log('error en encontrar descuento', error)
    }
  }

  async selectorNewDescuento(data) {
    try {
      const { APSA_ID, DESC_ANNO, DESC_MES } = data;
      return await this.descuentosCostosRepository.query(`
        SELECT ap.PARA_PARA, ap.PARA_NOMBRE, 0 DESC_VALOR 
		FROM (SELECT PARA_COSTO20010 FROM AUCO_INFOAPSDESCOST WHERE DESC_ESTADO = 1 AND APSA_ID = :1 AND DESC_ANNO = :2 AND DESC_MES = :3) t1 
      RIGHT JOIN AUGE_PARAMETROS ap ON (t1.PARA_COSTO20010 = ap.PARA_PARA AND ap.PARA_ESTADO = 'A') WHERE ap.CLAS_CLAS = 20010 AND t1.PARA_COSTO20010 IS NULL
        `, [APSA_ID, DESC_ANNO, DESC_MES]);
    } catch (error) {
      console.log('error en selector new descuento', error)
    }
  }

  async updateDescuento(data) {

    try {
      console.log(data)

      return await this.descuentosCostosRepository.query(
        `
        UPDATE TARIFICADOR.AUCO_INFOAPSDESCOST
        SET  DESC_VALOR= :1 
        WHERE DESC_ID= :2 AND APSA_ID= :3 AND DESC_ANNO= :4 AND DESC_MES= :5 AND PARA_COSTO20010= :6
        `, [data.DESC_VALOR, data.DESC_ID, data.APSA_ID, data.DESC_ANNO, data.DESC_MES, data.PARA_COSTO20010]
      )

    } catch (error) {
      console.log('error en actualizar descuento', error)
    }
  }




}
