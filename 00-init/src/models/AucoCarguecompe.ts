import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_CARGUECOMPE", ["apsaId", "emprEmpr", "compAnno", "compMes"], {
  unique: true,
})
@Entity("AUCO_CARGUECOMPE")
export class AucoCarguecompe {
  @Column("float", { name: "COMP_QA", precision: 126, default: () => "0" })
  compQa: number;

  @Column("float", { name: "COMP_TAFA", precision: 126, default: () => "0" })
  compTafa: number;

  @Column("float", { name: "COMP_CRTVBA", precision: 126, default: () => "0" })
  compCrtvba: number;

  @Column("float", { name: "COMP_CDFVBA", precision: 126, default: () => "0" })
  compCdfvba: number;

  @Column("float", { name: "COMP_CTLRELL", precision: 126, default: () => "0" })
  compCtlrell: number;

  @Column("float", { name: "COMP_INCEN", precision: 126, default: () => "0" })
  compIncen: number;

  @Column("float", { name: "COMP_CDFRELL", precision: 126, default: () => "0" })
  compCdfrell: number;

  @Column("date", {
    name: "COMP_FECCREA",
    nullable: true,
    default: () => "SYSDATE",
  })
  compFeccrea: Date | null;

  @Column("number", { name: "USUA_USUARIO", scale: 0 })
  usuaUsuario: number;

  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "EMPR_EMPR", scale: 0 })
  emprEmpr: number;

  @Column("number", { primary: true, name: "COMP_ANNO", scale: 0 })
  compAnno: number;

  @Column("number", { primary: true, name: "COMP_MES", scale: 0 })
  compMes: number;

  @Column("float", { name: "COMP_N", precision: 126, default: () => "0" })
  compN: number;

  @Column("float", { name: "COMP_NAA", precision: 126, default: () => "0" })
  compNaa: number;

  @Column("float", { name: "COMP_NDA", precision: 126, default: () => "0" })
  compNda: number;

  @Column("float", { name: "COMP_TAFNA", precision: 126, default: () => "0" })
  compTafna: number;

  @Column("float", { name: "COMP_MT3AGUA", precision: 126, default: () => "0" })
  compMt3Agua: number;

  @Column("float", { name: "COMP_QRT", precision: 126, default: () => "0" })
  compQrt: number;

  @Column("float", { name: "COMP_QLU", precision: 126, default: () => "0" })
  compQlu: number;

  @Column("float", { name: "COMP_QNA", precision: 126, default: () => "0" })
  compQna: number;

  @Column("float", { name: "COMP_QBL", precision: 126, default: () => "0" })
  compQbl: number;

  @Column("float", { name: "COMP_QR", precision: 126, default: () => "0" })
  compQr: number;

  @Column("float", { name: "COMP_QRS", precision: 126, default: () => "0" })
  compQrs: number;

  @Column("float", { name: "COMP_CBLJ", precision: 126, default: () => "0" })
  compCblj: number;

  @Column("float", { name: "COMP_LBLCOM", precision: 126, default: () => "0" })
  compLblcom: number;

  @Column("float", { name: "COMP_CP", precision: 126, default: () => "0" })
  compCp: number;

  @Column("float", { name: "COMP_M2CC", precision: 126, default: () => "0" })
  compM2Cc: number;

  @Column("float", { name: "COMP_M2LAV", precision: 126, default: () => "0" })
  compM2Lav: number;

  @Column("float", { name: "COMP_TI", precision: 126, default: () => "0" })
  compTi: number;

  @Column("float", { name: "COMP_TM", precision: 126, default: () => "0" })
  compTm: number;

  @Column("float", { name: "COMP_KLP", precision: 126, default: () => "0" })
  compKlp: number;
}
