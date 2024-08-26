import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Revercione } from './entities/revercione.entity';
import { Repository } from 'typeorm';


@Injectable()
export class RevercionesService {


  constructor(
    @InjectRepository(Revercione)
    private readonly revercionesRepository:Repository<Revercione>
  ) {}


  crearAutorizacion(user,data) {
    try {
      const {APSA_ID,ANNO,MES,DESCRIPCION} =data
      return this.revercionesRepository.query(`
        INSERT INTO TARIFICADOR.REVE_AUTORIZACION
        (APSA_ID, AUTO_ANNO, AUTO_MES, AUTO_DESCRIPCION, AUTO_FECCREA, USUA_USUARIO)
        VALUES(${APSA_ID}, ${ANNO}, ${MES}, ${DESCRIPCION}, SYSDATE , ${user})
      `)

    } catch (error) {
      console.log('Error en crearAutorizacion',error)
    }
  }


  detalladoAutorizacion(user) {
    try {
      return this.revercionesRepository.query(`
        SELECT * FROM vreve_autorizacion
        WHERE SISU_ID = ${user}
        ORDER BY 2 DESC, 3 DESC, 1
      `)
    } catch (error) {
      console.log('Error en detalladoAutorizacion',error)
    }
  }


}
