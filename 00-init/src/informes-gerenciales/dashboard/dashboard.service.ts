import { Injectable } from '@nestjs/common';
import { ConsultaDTO } from './dto/consulta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AucoApsaseo } from './entities/dashboard.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(AucoApsaseo)
    private readonly dasboardReposiroty: Repository<AucoApsaseo>,
  ) {}

  async findOne(body: ConsultaDTO, SISU_ID:number)
   {

    console.log(body, SISU_ID)
    const { ANNO, MES } = body;
    return await this.dasboardReposiroty.query(
      `
      SELECT A.apsa_id, A.apsa_nomaps, t.tari_fechacreacion, u.sisu_correo FROM auco_apsaseo A LEFT JOIN auco_tarifas T ON (a.apsa_id = t.apsa_id AND t.tari_anno = ${ANNO} AND t.tari_mes = ${MES} AND T.fapr_codigo = 4 AND T.para_tiptar20012 = 1 AND T.para_ubicacion20016 = 2 and T.para_tipfac20014 = 2 ) LEFT JOIN auge_sisusuario U ON (t.usua_usua = u.sisu_id)  INNER JOIN auco_apsusuarios AU ON (A.apsa_id = AU.apsa_id AND au.sisu_id = ${SISU_ID} AND au.apsi_estado = 1) WHERE apsa_estado = 1 ORDER BY a.apsa_nomaps
      `,
    );
  }
}
