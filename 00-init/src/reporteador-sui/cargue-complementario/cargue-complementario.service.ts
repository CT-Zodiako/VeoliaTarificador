import { Injectable } from '@nestjs/common';
import { CreateCargueComplementarioDto } from './dto/create-cargue-complementario.dto';
import { UpdateCargueComplementarioDto } from './dto/update-cargue-complementario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CargueComplementario } from './entities/cargue-complementario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CargueComplementarioService {
  constructor(
    @InjectRepository(CargueComplementario)
    private readonly cargueComplementarioRepository: Repository<CargueComplementario>
  ) {}


  async traerEmpresasPropias(data) {
    try {
      const { aps_id } = data;
      const empresas = await this.cargueComplementarioRepository.query(`
        SELECT 
          es.* 
        FROM 
          AUGE_EMPRESAS es 
        INNER JOIN AUCO_APSEMPRDIVI apsem 
          ON (es.empr_empr = apsem.empr_empr AND apsa_id = :1) 
        WHERE EMPR_PROPIA = :2`, [aps_id, '1']);
        
        return empresas;
    } catch (error) {
      return console.log(`error traerEmpresasPropias` )
    }
  }

 async  cargueInfComplemento(data, usucre) {
   try {
    const{aps, annos, meses, resumesem} = data;
    
        for (let element of resumesem) {
  
          let sqlDelete = `DELETE FROM SUI_COMPLEMENTO WHERE APSA_ID = :1 AND COM_ANNO = :2 AND COM_MES = :3`;
          await this.cargueComplementarioRepository.query(
            sqlDelete,
            [aps, annos, meses],
          );
  
          const sqlResumenMensual = `INSERT INTO TARIFICADOR.SUI_COMPLEMENTO
          (APSA_ID, COM_ANNO, COM_MES, F24_DET, F24_F1ET, F24_CPEET, F24_PRTZET, F24_CEG, F35_CAMRERS, F35_INCCDFALT9, F35_PRCTCRRCP, F35_V0, F35_VM, F35_MCRS, F35_ICRSM, F35_ICCRS, F35_FREIN, F35_CAPPERDF, COM_FECHA, USUARIO, F35_QRS_MES, F35_DISPALT9, F36_VL_MES)
          VALUES(:1, :2, :3, TO_NUMBER(:4), TO_NUMBER(:5), TO_NUMBER(:6), TO_NUMBER(:7), TO_NUMBER(:8), TO_NUMBER(:9), TO_NUMBER(:10), TO_NUMBER(:11), TO_NUMBER(:12), TO_NUMBER(:13), TO_NUMBER(:14), TO_NUMBER(:15), TO_NUMBER(:16), TO_NUMBER(:17), TO_NUMBER(:18), sysdate, TO_NUMBER(:19), TO_NUMBER(:20), TO_NUMBER(:21), TO_NUMBER(:22))`;
  
          await this.cargueComplementarioRepository.query(
            sqlResumenMensual,
            [
              element.aps,
              annos,
              meses,
              element.det,
              element.f1et,
              element.cpeet,
              element.prtzet,
              element.ceg,
              element.camrers,
              element.inccdfalt9,
              element.prctcrrcp,
              element.v0,
              element.vm,
              element.mcrs,
              element.icrsm,
              element.iccrs,
              element.frein,
              element.capperdf,
              usucre,
              element.QRS_MES,
              element.DISPALT9,
              element.VL_MES
            ],
          );
      }
    
   } catch (error) {
    return console.log(`error cargueInfComplemento`)
   }
  }
}
