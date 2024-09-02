import { Injectable } from '@nestjs/common';
import { CreateCrecimientoVaraibleDto } from './dto/create-crecimiento-varaible.dto';
import { UpdateCrecimientoVaraibleDto } from './dto/update-crecimiento-varaible.dto';
import { In, Repository } from 'typeorm';
import { ProyProyeccion } from './entities/crecimiento-varaible.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CrecimientoVaraiblesService {

constructor(
  @InjectRepository(ProyProyeccion)
  private readonly crecimientoVaraibleRepository: Repository<ProyProyeccion>,
) {}

  async registrarCrecimientoUsuarios(data, usuario) {
    try {
      const {PROY_ID,datosUsuarios} = data;

      await this.crecimientoVaraibleRepository.query(`
        DELETE FROM TARIFICADOR.PROY_USUARIOS WHERE PROY_ID = :1 AND COD_APS = :2
        `, [PROY_ID, datosUsuarios[0].COD_APS]);
      
      for(let fila of datosUsuarios){
        await this.crecimientoVaraibleRepository.query(`
            INSERT INTO TARIFICADOR.PROY_USUARIOS
      (PROY_ID, COD_APS, ANNO, SEMESTRE, CODUSO, NOMCLASEUSO, CODFACTOR, VALORFACTOR, CODTIPOPRED, NOMTIPOPRED, CANTIDAD, TONELADAS, FECHACREA, USUARIO)
      VALUES(TO_NUMBER(:1), TO_NUMBER(:2), TO_NUMBER(:3), TO_NUMBER(:4), TO_NUMBER(:5), :6, TO_NUMBER(:7), TO_NUMBER(:8), TO_NUMBER(:9), :10, TO_NUMBER(:11), TO_NUMBER(:12), sysdate , :13)
      `),
      [PROY_ID, fila.COD_APS, fila.ANNO, fila.SEMESTRE, fila.CODUSO, fila.NOMCLASEUSO, fila.CODFACTOR, fila.VALORFACTOR, fila.CODTIPOPRED, fila.NOMTIPOPRED, fila.CANTIDAD, fila.TONELADAS, usuario];
        }
      return
    } catch (error) {
      return `error en registrarCrecimientoUsuarios: ${error}`;
    }
  }
  async consultarCrecimiento(data) {
    try {
      const {PROY_ID} = data;
      const resultado = this.crecimientoVaraibleRepository.query(`
        SELECT * FROM PROY_CRECIMIENTO_VBLES WHERE APSA_ID = :1
        `, [PROY_ID]);

      

      
        
    } catch (error) {
      return `error en consultarCrecimiento: ${error}`;
    }
  }
  async registrarCrecimientoInfTerceros(data, usuario) {
    try {
      const {PROY_ID,datosTerceros} = data;

      await this.crecimientoVaraibleRepository.query(`
       DELETE FROM TARIFICADOR.PROY_COMPETIDOR WHERE PROY_ID = :1 AND COD_APS = :2
        `, [PROY_ID, datosTerceros[0].COD_APS]);
      
      for(let fila of datosTerceros){
        await this.crecimientoVaraibleRepository.query(`
            INSERT INTO TARIFICADOR.PROY_COMPETIDOR
      (PROY_ID, COD_APS, NOM_APS, COD_EMPRESA, NOM_EMPRESA, ANNO, MES, C_N, C_NA, C_ND, C_TAFNA, C_VALOR_MTS3, C_QRT, C_QLU, C_QNA, C_QBL, C_QRECHAZO, C_QRS, C_CBLJ, C_LBL, C_M2CC, C_M2LAV, C_TI, C_TM, C_KLP, C_VL, C_ESCENARIO, C_T, C_CPE, C_CTLMX, C_VA_CRT, C_VA_CRT_ABC, C_VA_CDF, C_VA_CDF_ABC, C_NAA, C_QA, C_TAFA, C_CRT_COMPETIDOR, C_CDF_COMPETIDOR, C_QRTZ, C_CTL_SIN_INCENTIVO, C_INCENTIVO, C_CDFSINCENTIVO, C_CPODA, FECHACREA, USUARIO)
      VALUES(TO_NUMBER(:1), TO_NUMBER(:2), :3, TO_NUMBER(:4), :5, TO_NUMBER(:6), TO_NUMBER(:7), TO_NUMBER(:8), TO_NUMBER(:9), TO_NUMBER(:10), TO_NUMBER(:11), TO_NUMBER(:12), TO_NUMBER(:13), TO_NUMBER(:14), TO_NUMBER(:15), TO_NUMBER(:16), TO_NUMBER(:17), TO_NUMBER(:18), TO_NUMBER(:19), TO_NUMBER(:20), TO_NUMBER(:21), TO_NUMBER(:22), TO_NUMBER(:23), TO_NUMBER(:24), TO_NUMBER(:25), TO_NUMBER(:26), TO_NUMBER(:27), TO_NUMBER(:28), TO_NUMBER(:29), TO_NUMBER(:30), TO_NUMBER(:31), TO_NUMBER(:32), TO_NUMBER(:33), TO_NUMBER(:34), TO_NUMBER(:35), TO_NUMBER(:36), TO_NUMBER(:37), TO_NUMBER(:38), TO_NUMBER(:39), TO_NUMBER(:40), TO_NUMBER(:41), TO_NUMBER(:42), TO_NUMBER(:43), TO_NUMBER(:44), sysdate, TO_NUMBER(:45))
      `,[
        PROY_ID,
        fila.COD_APS,
        fila.NOM_APS,
        fila.COD_EMPRESA,
        fila.NOM_EMPRESA,
        fila.ANNO,
        fila.MES,
        fila.C_N,
        fila.C_NA,
        fila.C_ND,
        fila.C_TAFNA,
        fila.C_VALOR_MTS3,
        fila.C_QRT,
        fila.C_QLU,
        fila.C_QNA,
        fila.C_QBL,
        fila.C_QRechazo,
        fila.C_QRS,
        fila.C_CBLj,
        fila.C_LBL,
        fila.C_M2CC,
        fila.C_M2LAV,
        fila.C_TI,
        fila.C_TM,
        fila.C_KLP,
        fila.C_VL,
        fila.C_ESCENARIO,
        fila.C_T,
        fila.C_CPE,
        fila.C_CTLMX,
        fila.C_VA_CRT,
        fila.C_VA_CRT_ABC,
        fila.C_VA_CDF,
        fila.C_VA_CDF_ABC,
        fila.C_NAA,
        fila.C_QA,
        fila.C_TAFA,
        fila.C_CRT_COMPETIDOR,
        fila.C_CDF_COMPETIDOR,
        fila.C_QRTz,
        fila.C_CTL_SIN_INCENTIVO,
        fila.C_INCENTIVO,
        fila.C_CDFSINCENTIVO,
        fila.C_CPODA,
        usuario,
      ],);
    }
    return `Se ha registrado correctamente el crecimiento de la infraestructura de terceros`;
      
    } catch (error) {
      return `error en registrarCrecimientoUsuarios: ${error}`;
    }
  }

  async registrarCrecimientoInfPropia(data, usuario) {
    try {
      const {PROY_ID,datosPropia} = data;

      await this.crecimientoVaraibleRepository.query(`
        DELETE FROM TARIFICADOR.PROY_PROPIA WHERE PROY_ID = :1 AND COD_APS = :2
        `, [PROY_ID, datosPropia[0].COD_APS]);


      for(let propia of datosPropia){
        await this.crecimientoVaraibleRepository.query(`INSERT INTO TARIFICADOR.PROY_PROPIA
      (PROY_ID, COD_APS, NOM_APS, COD_EMPRESA, NOM_EMPRESA, ANNO, MES, V_DISPTERC, IAT, V_N, V_NA, V_ND, V_TAFNA, V_QRT, V_QLU, V_QNA, V_QBL, V_QR, V_QRS, V_CBLJ, V_LBL, V_VALOR_MTS3, V_M2CC, V_M2LAV, V_TI, V_TM, V_KLP, V_VL, V_ESCENARIO, V_CTLMX, V_T, V_CPE, V_VA_CRT, V_VA_CRT_ABC, V_VA_CDF, V_VA_CDF_ABC, V_NAA, V_QA, V_TAFA, V_CP, V_CRT_PROPIO, V_CDF_FACTURADO, V_QRTZ, V_CDF_TERCERO, V_CTL_TERCERO, V_IR_TERCERO, FECHACREA, USUARIO)
      VALUES(TO_NUMBER(:1), TO_NUMBER(:2), :3, TO_NUMBER(:4), :5, TO_NUMBER(:6), TO_NUMBER(:7), :8, :9, TO_NUMBER(:10), TO_NUMBER(:11), TO_NUMBER(:12), TO_NUMBER(:13), TO_NUMBER(:14), TO_NUMBER(:15), TO_NUMBER(:16), TO_NUMBER(:17), TO_NUMBER(:18), TO_NUMBER(:19), TO_NUMBER(:20), TO_NUMBER(:21), TO_NUMBER(:22), TO_NUMBER(:23), TO_NUMBER(:24), TO_NUMBER(:25), TO_NUMBER(:26), TO_NUMBER(:27), TO_NUMBER(:28), TO_NUMBER(:29), TO_NUMBER(:30), TO_NUMBER(:31), TO_NUMBER(:32), TO_NUMBER(:33), TO_NUMBER(:34), TO_NUMBER(:35), TO_NUMBER(:36), TO_NUMBER(:37), TO_NUMBER(:38), TO_NUMBER(:39), TO_NUMBER(:40), TO_NUMBER(:41), TO_NUMBER(:42), TO_NUMBER(:43), TO_NUMBER(:44), TO_NUMBER(:45), TO_NUMBER(:46), sysdate , TO_NUMBER(:47))`,[
        PROY_ID,
        propia.COD_APS,
        propia.NOM_APS,
        propia.COD_EMPRESA,
        propia.NOM_EMPRESA,
        propia.ANNO,
        propia.MES,
        propia.V_DISPTERC,
        propia.IAT,
        propia.V_N,
        propia.V_NA,
        propia.V_ND,
        propia.V_TAFNA,
        propia.V_QRT,
        propia.V_QLU,
        propia.V_QNA,
        propia.V_QBL,
        propia.V_QR,
        propia.V_QRS,
        propia.V_CBLj,
        propia.V_LBL,
        propia.V_VALOR_MTS3,
        propia.V_M2CC,
        propia.V_M2LAV,
        propia.V_TI,
        propia.V_TM,
        propia.V_KLP,
        propia.V_VL,
        propia.V_ESCENARIO,
        propia.V_CTLMX,
        propia.V_T,
        propia.V_CPE,
        propia.V_VA_CRT,
        propia.V_VA_CRT_ABC,
        propia.V_VA_CDF,
        propia.V_VA_CDF_ABC,
        propia.V_NAA,
        propia.V_QA,
        propia.V_TAFA,
        propia.V_CP,
        propia.V_CRT_PROPIO,
        propia.V_CDF_FACTURADO,
        propia.V_QRTz,
        propia.V_CDF_TERCERO,
        propia.V_CTL_TERCERO,
        propia.V_IR_TERCERO,
        usuario,
      ] );
      }
          
          return `Se ha registrado correctamente el crecimiento de la infraestructura propia`;
    } catch (error) {
      return `error en registrarCrecimientoInfPropia: ${error}`;
    }
  }

}
