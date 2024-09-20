import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProyProyeccion } from './entities/lineas-tiempo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LineasTiempoService {

  constructor(
    @InjectRepository(ProyProyeccion)
    private proyProyeccionRepository: Repository<ProyProyeccion>
  ) {}
  async crearLineasTiempo(data, usuario) {
   try {
    const {isNew, dataTable} = data;
    if(isNew){
      for (const element of dataTable) {
        await this.proyProyeccionRepository.query(`
          INSERT INTO PROY_DETLINEATIEMPO
          (PROYID, APS, PROYANNO, PROYMES, DELTIPC, DELTIPCC, DELTSMLV, DELTIOEXP, DELTFACPRODUC, DELTFECHA, USUARIO, DELTINDIPCC, DELTIPCCS)
          VALUES(${element.PROYID}, ${element.APS}, ${element.PROYANNO}, ${element.PROYMES}, ${element.DELTIPC}, ${element.DELTIPCC}, ${element.DELTSMLV}, ${element.DELTIOEXP}, ${element.DELTFACPRODUC},  sysdate ,${usuario} ,${element.DELTINDIPCC}, ${element.DELTIPCCS}) 
        `); 
      }
    }else{
      {
        for (const element of dataTable) { 
          await this.proyProyeccionRepository.query(`
            UPDATE PROY_DETLINEATIEMPO
            SET DELTIPC= :1, DELTIPCC= :2, DELTSMLV= :3, DELTIOEXP= :4, DELTFACPRODUC= :5, DELTFECHA = sysdate, USUARIO = :6, DELTINDIPCC = :7, DELTIPCCS = :8
            WHERE PROYID = :9 AND APS = :10 AND PROYANNO = :11 AND PROYMES = :12
          `, [element.DELTIPC, element.DELTIPCC, element.DELTSMLV, element.DELTIOEXP, element.DELTFACPRODUC, usuario, element.DELTINDIPCC, element.DELTIPCCS, element.PROYID, element.APS, element.PROYANNO, element.PROYMES]);
        }
      }
    }
   } catch (error) {
      return `error al crearLineasTiempo: ${error}`
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

  
}
