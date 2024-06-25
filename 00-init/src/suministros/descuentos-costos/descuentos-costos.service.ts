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

  update(id: number, updateDescuentosCostoDto: UpdateDescuentosCostoDto) {
    return `This action updates a #${id} descuentosCosto`;
  }

  remove(id: number) {
    return `This action removes a #${id} descuentosCosto`;
  }
}
