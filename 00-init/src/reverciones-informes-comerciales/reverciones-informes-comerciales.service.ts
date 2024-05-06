import { Injectable } from '@nestjs/common';
import { CreateRevercionesInformesComercialeDto } from './dto/create-reverciones-informes-comerciale.dto';
import { UpdateRevercionesInformesComercialeDto } from './dto/update-reverciones-informes-comerciale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RevercionesInformesComerciale } from './entities/reverciones-informes-comerciale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RevercionesInformesComercialesService {
  constructor(
    @InjectRepository(RevercionesInformesComerciale)
    private readonly revercionesRepository:Repository<RevercionesInformesComercialesService>
  ){

  }


  async findAll() {
    return await this.revercionesRepository.query(`
    SELECT AA.APSA_NOMAPS, REVE_ANNO, REVE_MES, REVE_MOTIVO, AR.APSA_FECHACREACION, AS2.SISU_CORREO FROM AUCO_REVERSIONES ar JOIN AUGE_SISUSUARIO as2 ON AR.USUA_USUA = SISU_ID JOIN AUCO_APSASEO aa ON AA.APSA_ID = AR.APSA_ID WHERE AS2.SISU_ID NOT IN (9, 4) ORDER BY 2 DESC, 3 DESC, 1
    `)
  }


}
