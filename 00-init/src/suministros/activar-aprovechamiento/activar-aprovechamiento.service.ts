import { Injectable } from '@nestjs/common';
import { CreateActivarAprovechamientoDto } from './dto/create-activar-aprovechamiento.dto';
import { UpdateActivarAprovechamientoDto } from './dto/update-activar-aprovechamiento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { aprovechamientoEntity } from './entities/activar-aprovechamiento.entity';
import { Repository } from 'typeorm';
import { consultaDTO } from './dto/consulta.dto';

@Injectable()
export class ActivarAprovechamientoService {
  
  constructor(
    @InjectRepository(aprovechamientoEntity)
    readonly aprovechamientoRepository: Repository<aprovechamientoEntity>,

  ) {}


  async create(data, SISU_ID) {
    try {
      const {APSID, APROANNO, APROMES, ACTIVAR} = data;
      return await this.aprovechamientoRepository.query(
        `INSERT INTO aprov_activar VALUES(${APSID}, ${APROANNO}, ${APROMES}, ${ACTIVAR}, SYSDATE, ${SISU_ID})`
      );
    } catch (error) {
      console.log('Error en crear un aprovechamiento', error)
    }
  }

  findAll() {
    return `This action returns all activarAprovechamiento`;
  }

  async findOneAprovechamiento(data) {
    try {
      const {APSID, APROANNO, APROMES} = data;

      return await this.aprovechamientoRepository.query(
        `SELECT * FROM aprov_activar WHERE APSID= ${APSID} AND APROANNO=${APROANNO} AND APROMES=${APROMES}`
      )
      
    } catch (error) {
      console.log('Error en buiscar un aprovechamiento', error)
    }
  }

  async upAprovechamiento(data) {
    const {APSID, APROANNO, APROMES, ACTIVAR} = data;
    return this.aprovechamientoRepository.query(`
      UPDATE aprov_activar SET APROACTIVAR = ${ACTIVAR} WHERE APSID = ${APSID} AND APROANNO = ${APROANNO} AND APROMES = ${APROMES}
      `
    )
  }

}
