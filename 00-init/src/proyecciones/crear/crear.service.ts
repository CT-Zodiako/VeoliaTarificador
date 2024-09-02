import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProyProyeccion } from './entities/crear.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CrearService {

  constructor(
    @InjectRepository(ProyProyeccion)
    private proyProyeccionRepository: Repository<ProyProyeccion>
  ) {}

  async crearProyeccion(data,usuario) {
    try {
      const {APS, PROYNOMBRE, PROYDESCRIPCION, PROYTIPO100, PROYANNODES, PROYMESDES, PROYANNOHAS, PROYMESHAS} = data;
      return await this.proyProyeccionRepository.query(`
        INSERT INTO proy_proyeccion (PROYID, APS, PROYNOMBRE, PROYDESCRIPCION, PROYTIPO100, PROYANNODES, PROYMESDES, PROYANNOHAS, PROYMESHAS, PROYFECHA, USUARIO) VALUES (sproy_proyeccion.nextval, ${APS}, ${PROYNOMBRE}, ${PROYDESCRIPCION}, ${PROYTIPO100}, ${PROYANNODES},${PROYMESDES}, ${PROYANNOHAS}, ${PROYMESHAS}, sysdate, ${usuario})
        `)
    } catch (error) {
      return `error al crearProyeccion: ${error}`
    }
  }

  async consultarPorId(data) {
    try {
      const {PROYID}= data;
      return await this.proyProyeccionRepository.query(`SELECT * FROM PROY_DETLINEATIEMPO WHERE PROYID = ${PROYID} ORDER BY PROYANNO, PROYMES`)
    } catch (error) {
      return `error al crearProyeccion: ${error}`
    }
  }

  async editarProyeccion(data) {
    try {
      const {PROYNOMBRE,PROYDESCRIPCION,PROYTIPO100,PROYANNOHAS,PROYMESHAS,PROYID}= data;
      return await this.proyProyeccionRepository.query(`
        UPDATE proy_proyeccion SET PROYNOMBRE = ${PROYNOMBRE}, PROYDESCRIPCION = ${PROYDESCRIPCION}, PROYTIPO100 = ${PROYTIPO100}, PROYANNOHAS = ${PROYANNOHAS}, PROYMESHAS = ${PROYMESHAS} WHERE PROYID = ${PROYID}
        `)
    } catch (error) {
      return `error al editarProyeccion: ${error}`
    }
  }

  async consultaProyecciones() {
    try {
      return await this.proyProyeccionRepository.query(`
        SELECT as2.SISU_CORREO, ap.PARA_NOMBRE, aa.APSA_NOMAPS, (pp.PROYANNODES||'/'||lpad(pp.PROYMESDES,2,'0')) AS desde, (pp.PROYANNOHAS ||'/'||lpad(pp.PROYMESHAS,2,'0')) AS hasta,   pp.* FROM PROY_PROYECCION pp JOIN AUCO_APSASEO aa ON aa.APSA_ID =pp.APS JOIN AUGE_PARAMETROS ap ON (ap.PARA_PARA  = pp.PROYTIPO100 AND ap.CLAS_CLAS = 100) JOIN AUGE_SISUSUARIO as2 ON as2.SISU_ID = pp.USUARIO ORDER BY 1
        `)

    } catch (error) {
      return `error al crear consultaProyeccion: ${error}`
    }
  }
  async ultimasTarifas(data) {
    try {
      const {APSA_ID}= data;
      const resultado =  await this.proyProyeccionRepository.query(`
        SELECT MAX(TO_CHAR(tari_anno) ||'-'|| TO_CHAR(LPAD(tari_mes, 2, 0))) AS last_tarifa FROM AUCO_TARIFAS WHERE APSA_ID = ${APSA_ID}
        `)

        let splited = resultado[0].LAST_TARIFA.split("-");

        return {
          ANNO: splited[0],
          MES: splited[1]
        }

    } catch (error) {
      return `error al crear ultimasTarifas: ${error}`
    }
  }

 
}
