import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SemestralEntity } from './entities/semestral.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SemestralService {

  constructor(
    @InjectRepository(SemestralEntity)
    private semestralRepository: Repository<SemestralEntity>
  ){}

  async consultaPropias(data) {
    try {
      const {APSA_ID,propia}= data;
      return await this.semestralRepository.query(`
        SELECT es.* FROM AUGE_EMPRESAS es INNER JOIN AUCO_APSEMPRDIVI apsem ON (es.empr_empr = apsem.empr_empr AND apsa_id = :1) WHERE EMPR_PROPIA = :2
        `, [APSA_ID, propia]);
    } catch (error) {
      return `error al consultaPropias: ${error}`
    }
  }

  async carguePropia(data, usuario) {
    const {aps} = data;    
    // try {

    //   if (data) {
    //     await this.semestralRepository.query(`
    //       DELETE FROM 
    //         AUCO_CARGUEPROPIO 
    //       WHERE 
    //         APSA_ID = ${data.aps} AND 
    //         PROP_ANNO = ${data.anno} AND 
    //         PROP_MES = ${data.mes}
    //     `);
  
    //     await this.semestralRepository.query(`
    //     INSERT INTO AUCO_CARGUEPROPIO
    //       (APSA_ID, EMPR_EMPR, PROP_ANNO, PROP_MES, PROP_CP, PROP_MT3AGUA, PROP_M2CC, PROP_M2LAV, PROP_TI, PROP_TM, PROP_KLP, PROP_T, PROP_QA, PROP_ESCENARIO, PROP_FECCREA, USUA_USUARIO)
    //     VALUES 
    //       (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11, :12, :13, :14, sysdate, :15)`,
    //     [
    //       data.aps,
    //       data.empr,
    //       data.anno,
    //       data.mes,
    //       data.cp,
    //       data.mt3agua,
    //       data.m2cc,
    //       data.m2lav,
    //       data.ti,
    //       data.tm,
    //       data.klp,
    //       data.t,
    //       data.qa,
    //       data.escenario,
    //       usuario
    //     ]
    //   )
    //   }
    //   return 'carguePropia con exito';
    // } catch (err) {
    //   return `error al carguePropia: ${err}`
    // }
  };

  async cargueInfCompetidor(data, usuario) {
    try {
      const {resumemes} = data;

      if (resumemes) {
        let resmes = resumemes[0];

        await this.semestralRepository.query(`
          DELETE FROM 
            AUCO_CARGUECOMPE 
          WHERE 
            APSA_ID = :1 AND 
            EMPR_EMPR = :2 AND 
            COMP_ANNO = :3 AND 
            COMP_MES = :4
        `,[resmes.aps, resmes.empr, resmes.anno, resmes.mes]);
  
        await this.semestralRepository.query(`
            INSERT INTO 
              AUCO_CARGUECOMPE (APSA_ID, EMPR_EMPR, COMP_ANNO, COMP_MES, COMP_CP, COMP_MT3AGUA, COMP_M2CC, COMP_M2LAV, COMP_TI, COMP_TM, COMP_KLP, COMP_CBLJ, COMP_FECCREA, USUA_USUARIO)
            VALUES 
              (:1, :2, :3, :4 ,:5, :6, :7, :8, :9, :10, :11, :12, SYSDATE, :13)
        
          `,
        [
          resmes.aps,
          resmes.empr,
          resmes.anno,
          resmes.mes,
          resmes.cp,
          resmes.mt3agua,
          resmes.m2cc,
          resmes.m2lav,
          resmes.ti,
          resmes.tm,
          resmes.klp,
          resmes.cblj,
          usuario
        ]
      )
      }
      return 'cargueInfCompetidor con exito';
    } catch (err) {
      return `error al cargueInfCompetidor: ${err}`
    }
  };

    async cargueUsuarios(data, usuario) {
      try {
        
        await this.semestralRepository.query(`
          DELETE FROM 
            AUCO_CARGUECOMERCIAL 
          WHERE 
            CCOM_CODAPS = :1 AND 
            CCOM_ANNO = :2 AND 
            CCOM_MES = :3 
        `,[data.aps, data.anno, data.mes]);


        await this.semestralRepository.query(`
          DELETE FROM 
            AUCO_RESCOMERCIAL 
          WHERE 
            APSA_ID =:1 AND 
            RCOM_ANNO =:2 AND 
            RCOM_MES =:3
        `,[data.aps, data.anno, data.mes]);

        const pkvalue = await this.semestralRepository.query(`
          SELECT SAUCO_RESCOMERCIAL.nextval FROM DUAL
        `);

        await this.semestralRepository.query(`
          INSERT INTO 
            AUCO_RESCOMERCIAL 
          VALUES 
            (:1, :2, :3, :4, :5, :6, :7, :8, sysdate, :9)
        `, [
          pkvalue[0].NEXTVAL,
          data.aps,
          data.anno,
          data.mes,
          data.resume.N,
          data.resume.ND,
          data.resume.NA,
          data.resume.TAFNA,
          data.usucre,
        ]);


        for (let results of data.filecontent) {
          try {
            await this.semestralRepository.query(  `INSERT INTO AUCO_CARGUECOMERCIAL VALUES (SAUCO_CARGUECOMERCIAL.nextval, :1, TO_NUMBER(:2), :3, TO_NUMBER(:4), TO_NUMBER(:5), TO_NUMBER(:6), :7, TO_NUMBER(:8), TO_NUMBER(:9), TO_NUMBER(:10), :11, TO_NUMBER(:12), TO_NUMBER(:13), sysdate, :14)`,
              [
                pkvalue[0].NEXTVAL,
                results.codaps,
                results.aps,
                results.anno,
                results.mes,
                results.coduso,
                results.nomuso,
                results.codfactor,
                results.codtipo,
                results.tipo,
                results.tiponom,
                results.cantidad,
                results.toneladas,
                usuario,
              ],
             );
            
              
          
          } catch (err) {
            return `error al cargueUsuarios: ${err}`
          }
        }
        return 'cargueUsuarios con exito';
      } catch (error) {
        return `error al cargueUsuarios: ${error}`
      }
    }

    async cargueTerceros(data, usuario) {

      try {
        await this.semestralRepository.query(`
          DELETE FROM 
            AUCO_CARGUETERCERO 
          WHERE 
            APSA_ID = :1 AND 
            TERC_ANNO = :2 AND T
            ERC_MES = :3
        `,[data.aps, data.anno, data.mes]);

        await this.semestralRepository.query(`
          INSERT INTO 
            AUCO_CARGUETERCERO 
          VALUES
            (:1, :2, :3, :4, :5, :6, sysdate, :7)
        `, [data.aps, data.anno, data.mes, data.params.cdfter, data.params.ctlter, data.params.incenter, usuario]);

        return 'cargueTerceros con exito';
        
      } catch (error) {
        return `error al cargueTerceros: ${error}`
      }

    }






}
