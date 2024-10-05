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
    const {aps,
      empr,
      anno,
      mes,
      cp,
      mt3agua,
      m2cc,
      m2lav,
      ti,
      tm,
      klp,
      t,
      qa,
      escenario,} = data;    
    try {

        await this.semestralRepository.query(`
          DELETE FROM 
            AUCO_CARGUEPROPIO 
          WHERE 
            APSA_ID = ${aps} AND 
            PROP_ANNO = ${anno} AND 
            PROP_MES = ${mes}
        `);
  
        await this.semestralRepository.query(`
        INSERT INTO AUCO_CARGUEPROPIO
          (APSA_ID, EMPR_EMPR, PROP_ANNO, PROP_MES, PROP_CP, PROP_MT3AGUA, PROP_M2CC, PROP_M2LAV, PROP_TI, PROP_TM, PROP_KLP, PROP_T, PROP_QA, PROP_ESCENARIO, PROP_FECCREA, USUA_USUARIO)
        VALUES 
          (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11, :12, :13, :14, sysdate, :15)
          `,
        [
          aps,
          empr,
          anno,
          mes,
          cp,
          mt3agua,
          m2cc,
          m2lav,
          ti,
          tm,
          klp,
          t,
          qa,
          escenario,
          usuario
        ]
      )
      return 'carguePropia con exito';
    } catch (err) {
      return `error al carguePropia: ${err}`
    }
  };

  async cargueInfCompetidor(data, usuario) {
    try {
      const {
        aps,
        empr,
        anno,
        mes,
        cp,
        mt3agua,
        m2cc,
        m2lav,
        ti,
        tm,
        klp,
        cblj,
      } = data;

      if (data) {
        await this.semestralRepository.query(`
          DELETE FROM 
            AUCO_CARGUECOMPE 
          WHERE 
            APSA_ID = :1 AND 
            EMPR_EMPR = :2 AND 
            COMP_ANNO = :3 AND 
            COMP_MES = :4
        `,[aps, empr, anno, mes]);
  
        await this.semestralRepository.query(`
            INSERT INTO 
              AUCO_CARGUECOMPE (APSA_ID, EMPR_EMPR, COMP_ANNO, COMP_MES, COMP_CP, COMP_MT3AGUA, COMP_M2CC, COMP_M2LAV, COMP_TI, COMP_TM, COMP_KLP, COMP_CBLJ, COMP_FECCREA, USUA_USUARIO)
            VALUES 
              (:1, :2, :3, :4 ,:5, :6, :7, :8, :9, :10, :11, :12, SYSDATE, :13)
        
          `,
        [
          aps,
          empr,
          anno,
          mes,
          cp,
          mt3agua,
          m2cc,
          m2lav,
          ti,
          tm,
          klp,
          cblj,
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
      const {
        aps, 
        anno, 
        mes,
        N,
        ND,
        NA,
        TAFNA,
        codaps,
        coduso, 
        nomuso, 
        codfactor ,
        codtipo,  
        tipo, 
        tiponom,  
        cantidad, 
        toneladas 
      } = data;

      try {
        
        await this.semestralRepository.query(`
          DELETE FROM 
            AUCO_CARGUECOMERCIAL 
          WHERE 
            CCOM_CODAPS = :1 AND 
            CCOM_ANNO = :2 AND 
            CCOM_MES = :3 
        `,[aps, anno, mes]);


        await this.semestralRepository.query(`
          DELETE FROM 
            AUCO_RESCOMERCIAL 
          WHERE 
            APSA_ID =:1 AND 
            RCOM_ANNO =:2 AND 
            RCOM_MES =:3
        `,[aps, anno, mes]);

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
          aps,
          anno,
          mes,
          N,
          ND,
          NA,
          TAFNA,
          usuario,
        ]);


          try {
            await this.semestralRepository.query(
              `INSERT INTO AUCO_CARGUECOMERCIAL VALUES (SAUCO_CARGUECOMERCIAL.nextval, :1, TO_NUMBER(:2), :3, TO_NUMBER(:4), TO_NUMBER(:5), TO_NUMBER(:6), :7, TO_NUMBER(:8), TO_NUMBER(:9), TO_NUMBER(:10), :11, TO_NUMBER(:12), TO_NUMBER(:13), sysdate, :14)`,
              [
                pkvalue[0].NEXTVAL,
                codaps,
                aps,
                anno,
                mes,
                coduso,
                nomuso,
                codfactor,
                codtipo,
                tipo,
                tiponom,
                cantidad,
                toneladas,
                usuario,
              ],
             );
            
              
          
          } catch (err) {
            return `error al cargueUsuarios: ${err}`
          }
        
        return 'cargueUsuarios con exito';
      } catch (error) {
        return `error al cargueUsuarios: ${error}`
      }
    }

    async cargueTerceros(data, usuario) {
      const {
        aps, 
        anno, 
        mes,
        cdfter, 
        ctlter, 
        incenter
      } = data;
      try {
        await this.semestralRepository.query(`
          DELETE FROM 
            AUCO_CARGUETERCERO 
          WHERE 
            APSA_ID = :1 AND 
            TERC_ANNO = :2 AND
            TERC_MES = :3
        `,[aps, anno, mes]);

        await this.semestralRepository.query(`
          INSERT INTO  AUCO_CARGUETERCERO
            (APSA_ID, TERC_ANNO, TERC_MES, TERC_CDF, TERC_CTL, TERC_INCENTIVOCDF, TERC_FECCREA, USUA_USUARIO)
          VALUES(:1, :2, :3, :4 , :5 , :6 , SYSDATE, :7)
        `, 
        [
          aps, 
          anno, 
          mes, 
          cdfter, 
          ctlter, 
          incenter, 
          usuario
        ]);

        return 'cargueTerceros con exito';
        
      } catch (error) {
        return `error al cargueTerceros: ${error}`
      }

    }






}
