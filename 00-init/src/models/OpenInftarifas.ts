import { Column, Entity } from "typeorm";

@Entity("OPEN_INFTARIFAS")
export class OpenInftarifas {
  @Column("float", { name: "TRLU", precision: 126 })
  trlu: number;

  @Column("float", { name: "TRRA", precision: 126 })
  trra: number;

  @Column("number", { name: "UBIC20016", default: () => "2" })
  ubic20016: number;

  @Column("float", { name: "CCSENE", precision: 126 })
  ccsene: number;

  @Column("float", { name: "CCSENEAPROV", precision: 126 })
  ccseneaprov: number;

  @Column("float", { name: "CCSACU", precision: 126 })
  ccsacu: number;

  @Column("float", { name: "CCSACUAPROV", precision: 126 })
  ccsacuaprov: number;

  @Column("float", { name: "CBL", precision: 126 })
  cbl: number;

  @Column("float", { name: "CLUS", precision: 126 })
  clus: number;

  @Column("float", { name: "CRT", precision: 126 })
  crt: number;

  @Column("float", { name: "CDF", precision: 126 })
  cdf: number;

  @Column("float", { name: "CTL", precision: 126 })
  ctl: number;

  @Column("float", { name: "VBA", precision: 126 })
  vba: number;

  @Column("float", { name: "CIAT", precision: 126 })
  ciat: number;

  @Column("float", { name: "CP", precision: 126 })
  cp: number;

  @Column("float", { name: "CCC", precision: 126 })
  ccc: number;

  @Column("float", { name: "CLAV", precision: 126 })
  clav: number;

  @Column("float", { name: "CLP", precision: 126 })
  clp: number;

  @Column("float", { name: "CCEI", precision: 126 })
  ccei: number;

  @Column("float", { name: "CCEM", precision: 126 })
  ccem: number;

  @Column("date", {
    name: "FECINICOST",
    nullable: true,
    default: () => "sysdate",
  })
  fecinicost: Date | null;

  @Column("date", {
    name: "FECFINCOST",
    nullable: true,
    default: () => "sysdate",
  })
  fecfincost: Date | null;

  @Column("float", {
    name: "QA",
    nullable: true,
    precision: 126,
    default: () => "-1",
  })
  qa: number | null;

  @Column("float", { name: "QNA", precision: 126 })
  qna: number;

  @Column("float", { name: "QR", precision: 126 })
  qr: number;

  @Column("float", { name: "N_PRO", precision: 126 })
  nPro: number;

  @Column("float", { name: "NA_PRO", precision: 126 })
  naPro: number;

  @Column("float", { name: "ND_PRO", precision: 126 })
  ndPro: number;

  @Column("float", { name: "N_MES", precision: 126 })
  nMes: number;

  @Column("float", { name: "NA_MES", precision: 126 })
  naMes: number;

  @Column("float", { name: "ND_MES", precision: 126 })
  ndMes: number;

  @Column("float", { name: "FAPR_VALOR", precision: 126 })
  faprValor: number;

  @Column("date", { name: "FECCREA", nullable: true, default: () => "sysdate" })
  feccrea: Date | null;

  @Column("number", { name: "USUARIO" })
  usuario: number;

  @Column("number", { name: "CODAPSA" })
  codapsa: number;

  @Column("number", { name: "CODLOCALIDAD" })
  codlocalidad: number;

  @Column("varchar2", { name: "NOMAPS", length: 100 })
  nomaps: string;

  @Column("number", { name: "CLASUSO" })
  clasuso: number;

  @Column("number", { name: "CODUSO_OPEN" })
  codusoOpen: number;

  @Column("varchar2", { name: "NOMUSO_OPEN", length: 100 })
  nomusoOpen: string;

  @Column("number", { name: "CODESTRATO_OPEN" })
  codestratoOpen: number;

  @Column("varchar2", { name: "NOMESTRATO_OPEN", length: 100 })
  nomestratoOpen: string;

  @Column("number", { name: "TARIANNO" })
  tarianno: number;

  @Column("number", { name: "TARIMES" })
  tarimes: number;

  @Column("number", { name: "CODPROD" })
  codprod: number;

  @Column("number", { name: "TIPTAR20012" })
  tiptar20012: number;

  @Column("number", { name: "TIPFAC20014" })
  tipfac20014: number;

  @Column("number", { name: "COSTOFIJO" })
  costofijo: number;

  @Column("number", { name: "COSTOVARIABLE" })
  costovariable: number;

  @Column("number", { name: "CARGOFIJO" })
  cargofijo: number;

  @Column("number", { name: "CARGOFIJOSC" })
  cargofijosc: number;

  @Column("number", { name: "CARGOVARIABLE" })
  cargovariable: number;

  @Column("number", { name: "CARGOVARIABLESC" })
  cargovariablesc: number;

  @Column("float", {
    name: "CARGOAPV",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  cargoapv: number | null;

  @Column("float", {
    name: "CARGOAPVSC",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  cargoapvsc: number | null;

  @Column("float", { name: "SUBCONT", precision: 126 })
  subcont: number;

  @Column("float", { name: "TC", precision: 126 })
  tc: number;

  @Column("float", { name: "TCSC", precision: 126 })
  tcsc: number;

  @Column("float", { name: "TLU", precision: 126 })
  tlu: number;

  @Column("float", { name: "TLUSC", precision: 126 })
  tlusc: number;

  @Column("float", { name: "TBL", precision: 126 })
  tbl: number;

  @Column("float", { name: "TBLSC", precision: 126 })
  tblsc: number;

  @Column("float", { name: "TRTFIJO", precision: 126 })
  trtfijo: number;

  @Column("float", { name: "TRTVARI", precision: 126 })
  trtvari: number;

  @Column("float", { name: "TRTSCFIJO", precision: 126 })
  trtscfijo: number;

  @Column("float", { name: "TRTSCVAR", precision: 126 })
  trtscvar: number;

  @Column("float", { name: "TDFFIJO", precision: 126 })
  tdffijo: number;

  @Column("float", { name: "TDFVARI", precision: 126 })
  tdfvari: number;

  @Column("float", { name: "TDFSCFIJO", precision: 126 })
  tdfscfijo: number;

  @Column("float", { name: "TDFSCVARI", precision: 126 })
  tdfscvari: number;

  @Column("float", { name: "IATFIJO", precision: 126 })
  iatfijo: number;

  @Column("float", { name: "IATVARI", precision: 126 })
  iatvari: number;

  @Column("float", { name: "IATSCFIJO", precision: 126 })
  iatscfijo: number;

  @Column("float", { name: "IATSCVARI", precision: 126 })
  iatscvari: number;

  @Column("float", { name: "TTLFIJO", precision: 126 })
  ttlfijo: number;

  @Column("float", { name: "TTLVARI", precision: 126 })
  ttlvari: number;

  @Column("float", { name: "TTLSCFIJO", precision: 126 })
  ttlscfijo: number;

  @Column("float", { name: "TTLSCVARI", precision: 126 })
  ttlscvari: number;

  @Column("float", { name: "TA", precision: 126 })
  ta: number;

  @Column("float", { name: "TASC", precision: 126 })
  tasc: number;

  @Column("float", { name: "TRNA", precision: 126 })
  trna: number;

  @Column("float", { name: "TAFNA", precision: 126 })
  tafna: number;

  @Column("float", {
    name: "TAFA",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  tafa: number | null;

  @Column("float", { name: "TRA", precision: 126 })
  tra: number;

  @Column("float", { name: "TRBL", precision: 126 })
  trbl: number;
}
