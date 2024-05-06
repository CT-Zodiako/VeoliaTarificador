import { Injectable } from '@nestjs/common';
import { ConsultaDTO } from './dto/consulta.dto';
import { Repository } from 'typeorm';
import { Dashboard } from './entities/dashboard.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Dashboard)
    private readonly dashboardRepository:Repository<Dashboard>  ){

  }

  getDashboard(SISU_ID: any, consultaDTO: ConsultaDTO) {
    const {ANNO,MES}= consultaDTO
    return this.dashboardRepository.query(`
    SELECT * FROM TABLE(PK_SUI.fsui_estado(${ANNO}, ${MES})) p INNER JOIN auco_apsusuarios u ON p.apsid = u.apsa_id WHERE u.SISU_ID = ${SISU_ID } and u.apsi_estado = 1
    `)
  }

}
