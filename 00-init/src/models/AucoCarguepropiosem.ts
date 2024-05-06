import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_AUCO_CARGUEPROPIOSEM",
  ["apsaId", "emprEmpr", "propAnno", "propMes"],
  { unique: true }
)
@Entity("AUCO_CARGUEPROPIOSEM")
export class AucoCarguepropiosem {
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

  @Column("float", { name: "PROP_LBL", precision: 126, default: () => "0" })
  propLbl: number;

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

  @Column("float", { name: "PROP_CPE", precision: 126, default: () => "0" })
  propCpe: number;

  @Column("float", { name: "PROP_NAA", precision: 126, default: () => "0" })
  propNaa: number;

  @Column("float", { name: "PROP_TAFA", precision: 126, default: () => "0" })
  propTafa: number;

  @Column("float", {
    name: "PROP_CRTPROPIO",
    precision: 126,
    default: () => "0",
  })
  propCrtpropio: number;

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
