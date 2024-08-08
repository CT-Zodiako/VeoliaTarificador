import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vpoda_reporte } from './entities/generale.entity';
import { Repository } from 'typeorm';
import { ConsultaDTO } from './dto/consulta.dto';

@Injectable()
export class GeneralesService {
  constructor(
    @InjectRepository(Vpoda_reporte)
    private readonly generalesRepository: Repository<Vpoda_reporte>,
  ) {}

  async getProyeccionByAPS(aps){
    const {APSA_ID} = aps
    return await this.generalesRepository.query(
      `
        SELECT * FROM proy_proyeccion WHERE APS = ${APSA_ID} ORDER BY PROYNOMBRE      
      `
    )
  }

  async getEnergia(consultaDTO: ConsultaDTO) {
    const { APSA_ID, PROY_ID } = consultaDTO;
    return await this.generalesRepository.query(`
      SELECT RF.clas_nombre, RF.factor_prod, RF.TipoTar, RF.faen_anno, RF.faen_mes, RF.faen_subcon, RF.faen_usuarios,
      RF.faen_tcprop, RF.faen_tcterc, RF.faen_tcapro, RF.faen_tbl, RF.faen_tlu, RF.faen_trt, RF.faen_tdf, RF.faen_tinc, RF.faen_tiat,
      RF.faen_ttl, RF.faen_ta, RF.faen_total, RF.faen_totsc, RF.faen_totpropleno, RF.faen_totprosubcon
      FROM vpro_resfactene RF
      WHERE RF.apsa_id = ${APSA_ID} AND rf.proy_id = ${PROY_ID}
      `);
  }

  async getAcueducto(consultaDTO: ConsultaDTO) {
    const { APSA_ID, PROY_ID } = consultaDTO;
    return await this.generalesRepository.query(`
      SELECT RF.clas_nombre, RF.factor_prod, RF.TipoTar, RF.facu_anno, RF.facu_mes, RF.facu_subcon, RF.facu_usuarios,
      RF.facu_tcprop, RF.facu_tcterc, RF.facu_tcapro, RF.facu_tbl, RF.facu_tlu, RF.facu_trt, RF.facu_tdf, RF.facu_tinc, RF.facu_tiat,
      RF.facu_ttl, RF.facu_ta, RF.facu_total, RF.facu_totsc,  RF.facu_totpropleno, RF.facu_totprosubcon
      FROM vpro_resfactacu RF
      WHERE RF.apsa_id = ${APSA_ID} AND rf.proy_id = ${PROY_ID}
      `);
  }

  async getCostos(consultaDTO: ConsultaDTO) {
    const { APSA_ID, PROY_ID } = consultaDTO;
    return await this.generalesRepository.query(`
    SELECT c.tipo_fact, c.cost_anno, c.cost_mes, c.cost_ccs,
    c.cost_ccsapro, c.cost_cbl, c.cost_clus, c.cost_crt, c.cost_cdf, c.cost_inc,c.cost_iat, c.cost_ctl,
    c.cost_vba
    FROM vpro_rescostos c
    WHERE c.apsa_id = ${APSA_ID} and c.proy_id = ${PROY_ID}
      `);
  }

  async getTarifas(consultaDTO: ConsultaDTO) {
    const { APSA_ID, PROY_ID } = consultaDTO;
    return await this.generalesRepository.query(`
    SELECT DISTINCT t.proy_id, t.apsa_id, t.clas_nombre, t.tipo_tar, t.tipo_fact, t.tari_anno,t.tari_mes, t.tari_subcon, t.tari_tcprop, t.tari_tcterc, t.tari_tcapro, t.tari_tbl,t.tari_tlu, t.tari_trt, t.tari_tdf, t.tari_inc, t.tari_tiat, t.tari_ttl, t.tari_ta, t.tari_total, t.tari_totsc FROM vpro_restarifas t WHERE t.apsa_id = ${APSA_ID} and t.proy_id = ${PROY_ID}`);
  }
}
