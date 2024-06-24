import { Injectable } from '@nestjs/common';
import { UpdateAjusteProductividadDto } from './dto/update-ajuste-productividad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductividadEntity } from './entities/ajuste-productividad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AjusteProductividadService {
  constructor(
    @InjectRepository(ProductividadEntity)
    private readonly ajusteProductividadRepository: Repository<ProductividadEntity>
  ){

  }


  async create( data, user) {
    try {
      
      const {APSA_ID,PROD_ANNO,PROD_MES,PROD_VALOR}=data;
      return await this.ajusteProductividadRepository.query(`
        INSERT INTO TARIFICADOR.AUCO_PRODUCTIVIDAD
        (APSA_ID, PROD_ANNO, PROD_MES, PROD_VALOR, PROD_FECCREA, USUA_USUA)
        VALUES(${APSA_ID}, ${PROD_ANNO}, ${PROD_MES}, ${PROD_VALOR}, sysdate, ${user})
        `)
    } catch (error) {
      console.log('error en crear ajusteProductividad', error)
      
    }
  }

  findAll() {
    return `This action returns all ajusteProductividad`;
  }

  async findProductividad(data) {
    try {
      
      const { APSA_ID, PROD_ANNO, PROD_MES } = data;
      return await this.ajusteProductividadRepository.query(`
        SELECT * FROM AUCO_PRODUCTIVIDAD WHERE APSA_ID = ${APSA_ID} AND PROD_ANNO =${PROD_ANNO} AND PROD_MES = ${PROD_MES}
        `)
    } catch (error) {
      console.log('error en buscar ajusteProductividad', error)
    }
  }

  update(id: number, updateAjusteProductividadDto: UpdateAjusteProductividadDto) {
    return `This action updates a #${id} ajusteProductividad`;
  }

}
