import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_CARGUEPROPIO", ["apsaId", "emprEmpr", "propAnno", "propMes"], {
  unique: true,
})
@Entity("AUCO_CARGUEPROPIO")
export class AucoCarguepropio {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "EMPR_EMPR", scale: 0 })
  emprEmpr: number;

  @Column("number", { primary: true, name: "PROP_ANNO", scale: 0 })
  propAnno: number;

  @Column("number", { primary: true, name: "PROP_MES", scale: 0 })
  propMes: number;

  @Column("float", { name: "PROP_QRT", precision: 126, default: () => "0" })
  propQrt: number;

  @Column("float", { name: "PROP_QLU", precision: 126, default: () => "0" })
  propQlu: number;

  @Column("float", { name: "PROP_QNA", precision: 126, default: () => "0" })
  propQna: number;

  @Column("float", { name: "PROP_QBL", precision: 126, default: () => "0" })
  propQbl: number;

  @Column("float", { name: "PROP_QR", precision: 126, default: () => "0" })
  propQr: number;

  @Column("float", { name: "PROP_QRS", precision: 126, default: () => "0" })
  propQrs: number;

  @Column("float", { name: "PROP_CBLJ", precision: 126, default: () => "0" })
  propCblj: number;

  @Column("float", { name: "PROP_LBL", precision: 126, default: () => "0" })
  propLbl: number;

  @Column("float", { name: "PROP_MT3AGUA", precision: 126, default: () => "0" })
  propMt3Agua: number;

  @Column("float", { name: "PROP_CP", precision: 126, default: () => "0" })
  propCp: number;

  @Column("float", { name: "PROP_M2CC", precision: 126, default: () => "0" })
  propM2Cc: number;

  @Column("float", { name: "PROP_M2LAV", precision: 126, default: () => "0" })
  propM2Lav: number;

  @Column("float", { name: "PROP_TI", precision: 126, default: () => "0" })
  propTi: number;

  @Column("float", { name: "PROP_TM", precision: 126, default: () => "0" })
  propTm: number;

  @Column("float", { name: "PROP_KLP", precision: 126, default: () => "0" })
  propKlp: number;

  @Column("float", { name: "PROP_VL", precision: 126, default: () => "0" })
  propVl: number;

  @Column("float", {
    name: "PROP_ESCENARIO",
    precision: 126,
    default: () => "0",
  })
  propEscenario: number;

  @Column("float", { name: "PROP_CTLMX", precision: 126, default: () => "0" })
  propCtlmx: number;

  @Column("float", { name: "PROP_T", precision: 126, default: () => "0" })
  propT: number;

  @Column("float", { name: "PROP_CPE", precision: 126, default: () => "0" })
  propCpe: number;

  @Column("float", { name: "PROP_VACRT", precision: 126, default: () => "0" })
  propVacrt: number;

  @Column("float", {
    name: "PROP_VACRTABC",
    precision: 126,
    default: () => "0",
  })
  propVacrtabc: number;

  @Column("float", { name: "PROP_VACDF", precision: 126, default: () => "0" })
  propVacdf: number;

  @Column("float", {
    name: "PROP_VACDFABC",
    precision: 126,
    default: () => "0",
  })
  propVacdfabc: number;

  @Column("float", { name: "PROP_NAA", precision: 126, default: () => "0" })
  propNaa: number;

  @Column("float", { name: "PROP_QA", precision: 126, default: () => "0" })
  propQa: number;

  @Column("float", { name: "PROP_TAFA", precision: 126, default: () => "0" })
  propTafa: number;

  @Column("float", {
    name: "PROP_CRTPROPIO",
    precision: 126,
    default: () => "0",
  })
  propCrtpropio: number;

  @Column("float", {
    name: "PROP_QRTPROPIO",
    precision: 126,
    default: () => "0",
  })
  propQrtpropio: number;

  @Column("float", {
    name: "PROP_CDFPROPIO",
    precision: 126,
    default: () => "0",
  })
  propCdfpropio: number;

  @Column("date", {
    name: "PROP_FECCREA",
    nullable: true,
    default: () => "SYSDATE",
  })
  propFeccrea: Date | null;

  @Column("number", { name: "USUA_USUARIO", scale: 0 })
  usuaUsuario: number;
}
