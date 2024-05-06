import { Column, Entity } from "typeorm";

@Entity("CORRER_TARIFAS")
export class CorrerTarifas {
  @Column("number", { name: "PARA_UBICACION20016" })
  paraUbicacion20016: number;

  @Column("float", { name: "TARI_CRT", precision: 126 })
  tariCrt: number;

  @Column("float", { name: "TARI_CDF", precision: 126 })
  tariCdf: number;

  @Column("float", { name: "TARI_CTL", precision: 126 })
  tariCtl: number;

  @Column("float", { name: "TARI_VBA", precision: 126 })
  tariVba: number;

  @Column("float", { name: "TARI_CP", precision: 126 })
  tariCp: number;

  @Column("float", { name: "TARI_CCC", precision: 126 })
  tariCcc: number;

  @Column("float", { name: "TARI_CLAV", precision: 126 })
  tariClav: number;

  @Column("float", { name: "TARI_CLP", precision: 126 })
  tariClp: number;

  @Column("float", { name: "TARI_CCEI", precision: 126 })
  tariCcei: number;

  @Column("float", { name: "TARI_CCEM", precision: 126 })
  tariCcem: number;

  @Column("date", { name: "TARI_FECHACREACION", nullable: true })
  tariFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("float", { name: "TARI_QA", nullable: true, precision: 126 })
  tariQa: number | null;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "CLAS_CLASE" })
  clasClase: number;

  @Column("number", { name: "TARI_ANNO" })
  tariAnno: number;

  @Column("number", { name: "TARI_MES" })
  tariMes: number;

  @Column("number", { name: "FAPR_CODIGO" })
  faprCodigo: number;

  @Column("number", { name: "PARA_TIPTAR20012" })
  paraTiptar20012: number;

  @Column("number", { name: "PARA_TIPFAC20014" })
  paraTipfac20014: number;

  @Column("number", { name: "MULT_MULTI" })
  multMulti: number;

  @Column("number", { name: "TARI_COSTOFIJO" })
  tariCostofijo: number;

  @Column("number", { name: "TARI_COSTOVARIABLE" })
  tariCostovariable: number;

  @Column("number", { name: "TARI_CARGOFIJO" })
  tariCargofijo: number;

  @Column("number", { name: "TARI_CARGOFIJOSC" })
  tariCargofijosc: number;

  @Column("number", { name: "TARI_CARGOVARIABLE" })
  tariCargovariable: number;

  @Column("number", { name: "TARI_CARGOVARIABLESC" })
  tariCargovariablesc: number;

  @Column("float", { name: "TARI_CARGOAPV", nullable: true, precision: 126 })
  tariCargoapv: number | null;

  @Column("float", { name: "TARI_CARGOAPVSC", nullable: true, precision: 126 })
  tariCargoapvsc: number | null;

  @Column("float", { name: "TARI_SUBCONT", precision: 126 })
  tariSubcont: number;

  @Column("float", { name: "TARI_TC", precision: 126 })
  tariTc: number;

  @Column("float", { name: "TARI_TCSC", precision: 126 })
  tariTcsc: number;

  @Column("float", { name: "TARI_TLU", precision: 126 })
  tariTlu: number;

  @Column("float", { name: "TARI_TLUSC", precision: 126 })
  tariTlusc: number;

  @Column("float", { name: "TARI_TBL", precision: 126 })
  tariTbl: number;

  @Column("float", { name: "TARI_TBLSC", precision: 126 })
  tariTblsc: number;

  @Column("float", { name: "TARI_TRT", precision: 126 })
  tariTrt: number;

  @Column("float", { name: "TARI_TRTSC", precision: 126 })
  tariTrtsc: number;

  @Column("float", { name: "TARI_TDF", precision: 126 })
  tariTdf: number;

  @Column("float", { name: "TARI_TDFSC", precision: 126 })
  tariTdfsc: number;

  @Column("float", { name: "TARI_TTL", precision: 126 })
  tariTtl: number;

  @Column("float", { name: "TARI_TTLSC", precision: 126 })
  tariTtlsc: number;

  @Column("float", { name: "TARI_TA", precision: 126 })
  tariTa: number;

  @Column("float", { name: "TARI_TASC", precision: 126 })
  tariTasc: number;

  @Column("float", { name: "TARI_TRNA", precision: 126 })
  tariTrna: number;

  @Column("float", { name: "TARI_TAFNA", precision: 126 })
  tariTafna: number;

  @Column("float", { name: "TARI_TAFA", nullable: true, precision: 126 })
  tariTafa: number | null;

  @Column("float", { name: "TARI_TRA", precision: 126 })
  tariTra: number;

  @Column("float", { name: "TARI_TRBL", precision: 126 })
  tariTrbl: number;

  @Column("float", { name: "TARI_TRLU", precision: 126 })
  tariTrlu: number;

  @Column("float", { name: "TARI_TRRA", precision: 126 })
  tariTrra: number;
}
