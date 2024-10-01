import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SemestralEntity } from '../semestral/entities/semestral.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MensualService {

  constructor(
    @InjectRepository(SemestralEntity)
    private semestralRepository: Repository<SemestralEntity>,
  ) {}

  async consultaPropias(data) {
    try {
      const {APSA_ID,propia}= data;
      return await this.semestralRepository.query(
        `
        SELECT es.* 
          FROM AUGE_EMPRESAS es 
        INNER JOIN 
          AUCO_APSEMPRDIVI apsem ON (es.empr_empr = apsem.empr_empr AND apsa_id = :1) 
        WHERE 
          EMPR_PROPIA = :2
        `, [APSA_ID,propia]
      );
    } catch (error) {
      return `eror consultaPropias semestral ${error}`;
    }
  }

  async carguePropias(data) {
    try {
      const {resumesem, usucre} = data;

      for (let element of resumesem) {
        let sqlDelete = `
          DELETE FROM 
            AUCO_CARGUEPROPIOSEM 
          WHERE 
            APSA_ID = :1 AND 
            PROP_ANNO = :2 AND 
            PROP_MES = :3
        `;
        await this.semestralRepository.query(sqlDelete, [element.aps, element.anno, element.mes]);

        const sqlResumenMensual = `INSERT INTO TARIFICADOR.AUCO_CARGUEPROPIOSEM
        (APSA_ID, EMPR_EMPR, PROP_ANNO, PROP_MES, PROP_QRT, PROP_QLU, PROP_QNA, PROP_QBL, PROP_QR, PROP_QRS, PROP_LBL, PROP_VL, PROP_ESCENARIO, PROP_CTLMX, PROP_CPE, PROP_NAA, PROP_TAFA, PROP_CRTPROPIO, PROP_CDFPROPIO, PROP_FECCREA, USUA_USUARIO)
        VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11, :12, :13, :14, :15, :16, :17, :18, :19, sysdate, :20)`;

        await this.semestralRepository.query(sqlResumenMensual, [ 
          element.aps,
          element.empr,
          element.anno,
          element.mes,
          element.qrt,
          element.qlu,
          element.qna,
          element.qbl,
          element.qr,
          element.qrs,
          element.lbl,
          element.vl,
          element.esce,
          element.ctlmx,
          element.cpe,
          element.naa,
          element.tafa,
          element.crtpro,
          element.cdfpro,
          usucre,
        ]);

        return 'carguePropias semestral exitoso';

      }

    } catch (error) {
      return `error carguePropias semestral ${error}`;
    }
  }
}
