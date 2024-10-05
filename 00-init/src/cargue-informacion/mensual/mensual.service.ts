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

  async carguePropias(data, usuario) {
    try {
      const { aps,
        empr,
        anno,
        mes,
        qrt,
        qlu,
        qna,
        qbl,
        qr,
        qrs,
        lbl,
        vl,
        esce,
        ctlmx,
        cpe,
        naa,
        tafa,
        crtpro,
        cdfpro,
      } = data;

        let sqlDelete = `
          DELETE FROM 
            AUCO_CARGUEPROPIOSEM 
          WHERE 
            APSA_ID = :1 AND 
            PROP_ANNO = :2 AND 
            PROP_MES = :3
        `;
        await this.semestralRepository.query(sqlDelete, [ aps,   anno,   mes]);

        const sqlResumenMensual = `INSERT INTO TARIFICADOR.AUCO_CARGUEPROPIOSEM
        (APSA_ID, EMPR_EMPR, PROP_ANNO, PROP_MES, PROP_QRT, PROP_QLU, PROP_QNA, PROP_QBL, PROP_QR, PROP_QRS, PROP_LBL, PROP_VL, PROP_ESCENARIO, PROP_CTLMX, PROP_CPE, PROP_NAA, PROP_TAFA, PROP_CRTPROPIO, PROP_CDFPROPIO, PROP_FECCREA, USUA_USUARIO)
        VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11, :12, :13, :14, :15, :16, :17, :18, :19, sysdate, :20)`;

        await this.semestralRepository.query(sqlResumenMensual, [ 
          aps,
          empr,
          anno,
          mes,
          qrt,
          qlu,
          qna,
          qbl,
          qr,
          qrs,
          lbl,
          vl,
          esce,
          ctlmx,
          cpe,
          naa,
          tafa,
          crtpro,
          cdfpro,
          usuario,
        ]);

        return 'carguePropias semestral exitoso';


    } catch (error) {
      return `error carguePropias semestral ${error}`;
    }
  }

  async cargueInfCompetidor(data, usuario) {
    try {
      const {
        aps, 
        empr, 
        anno, 
        mes,
        n,
        na,
        nd,
        qlu,
        qna,
        qbl,
        qr,
        cblj,
        lbl,
        crtcomp,
        cdfcomp,
        qrtz,
      } = data;
          
          await this.semestralRepository.query(
            `
              DELETE FROM 
                AUCO_CARGUECOMPESEM 
              WHERE 
                APSA_ID = :1 and 
                EMPR_EMPR = :2 AND 
                COMP_ANNO = :3 AND 
                COMP_MES = :4`,
            [aps, empr, anno, mes]
          );
  
  
          const sqlResumemes = `INSERT INTO TARIFICADOR.AUCO_CARGUECOMPESEM
          (APSA_ID, EMPR_EMPR, COMP_ANNO, COMP_MES, COMP_N, COMP_NAA, COMP_NDA, COMP_QLU, COMP_QNA, COMP_QBL, COMP_QR, COMP_CBLJ, COMP_LBLCOM, COMP_CRTVBA, COMP_CDFVBA, COMP_QRT, COMP_FECCREA, USUA_USUARIO)
          VALUES (:1, :2, :3, :4 ,:5, :6, :7, :8, :9, :10, :11, :12, :13, :14, :15, :16, SYSDATE, :17)`;
  
          await this.semestralRepository.query(
            sqlResumemes,
            [
              aps,
              empr,
              anno,
              mes,
              n,
              na,
              nd,
              qlu,
              qna,
              qbl,
              qr,
              cblj,
              lbl,
              crtcomp,
              cdfcomp,
              qrtz,
              usuario,
            ]
          );
          return 'cargueInfCompetidor semestral exitoso';
        }
    catch (err) {
       console.error(err);
        return `error cargueInfCompetidor semestral ${err}`;
    }
  }

  async cargueUsuarios(data, usuario) {
    console.log('data', data);
    try {
      const {
        codaps,
        aps,
        anno,
        semestre,
        coduso,
        nomuso,
        codfactor,
        nomfact,
        codtipo,
        nomtipo,
        susm1,
        susm2,
        susm3,
        susm4,
        susm5,
        susm6,
        afom1,
        afom2,
        afom3,
        afom4,
        afom5,
        afom6,
      }= data

        let sqlDelete = `DELETE FROM AUCO_CARGUEUSUSEM WHERE CAUS_CODAPS = :1 AND CAUS_ANNO = :2 AND CAUS_SEMESTRE = :3`;
  
        await this.semestralRepository.query(sqlDelete, [aps, anno, semestre]);
        
          const sqlResumenMensual = `INSERT INTO TARIFICADOR.AUCO_CARGUEUSUSEM
          (CAUS_CODAPS, CAUS_APSNOM, CAUS_ANNO, CAUS_SEMESTRE, CAUS_CODCU, CAUS_NOMCU, CAUS_CODFACTOR, CAUS_NOMFACTOR, CAUS_CODTIPO, CAUS_NOMTIPO, CAUS_CANTM1, CAUS_CANTM2, CAUS_CANTM3, CAUS_CANTM4, CAUS_CANTM5, CAUS_CANTM6, CAUS_TONM1, CAUS_TONM2, CAUS_TONM3, CAUS_TONM4, CAUS_TONM5, CAUS_TONM6, CAUS_FECRE, CAUS_USUCRE)
          VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11, :12, :13, :14, :15, :16, :17, :18, :19, :20, :21, :22, sysdate, :23)`;
  
          await this.semestralRepository.query(
            sqlResumenMensual,
            [
              codaps,
              aps,
              anno,
              semestre,
              coduso,
              nomuso,
              codfactor,
              nomfact,
              codtipo,
              nomtipo,
              susm1,
              susm2,
              susm3,
              susm4,
              susm5,
              susm6,
              afom1,
              afom2,
              afom3,
              afom4,
              afom5,
              afom6,
              usuario,
            ],
          );
        
      return 'cargueUsuarios semestral exitoso';
      
    } catch (error) {
      return 'error cargueUsuarios semestral';
    }
}
}
