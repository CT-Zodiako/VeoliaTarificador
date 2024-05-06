import { Column, Entity, Index } from "typeorm";

@Index(
  "IXAUCO_REVEAPSRELLENO01",
  ["iareId", "apsaId", "rellId", "iareAnno", "iareMes"],
  { unique: true }
)
@Index("PK_AUCO_REVEAPSRELLENO", ["reveId", "iareId"], { unique: true })
@Entity("AUCO_REVEAPSRELLENO")
export class AucoReveapsrelleno {
  @Column("number", { primary: true, name: "REVE_ID" })
  reveId: number;

  @Column("number", { primary: true, name: "IARE_ID" })
  iareId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "RELL_ID" })
  rellId: number;

  @Column("number", { name: "IARE_ANNO" })
  iareAnno: number;

  @Column("number", { name: "IARE_MES" })
  iareMes: number;

  @Column("float", { name: "IARE_QRS", precision: 126 })
  iareQrs: number;

  @Column("float", { name: "IARE_CDFK", precision: 126, default: () => "0" })
  iareCdfk: number;

  @Column("float", {
    name: "IARE_VACDFABC",
    precision: 126,
    default: () => "0",
  })
  iareVacdfabc: number;

  @Column("float", { name: "IARE_VACDF", precision: 126, default: () => "0" })
  iareVacdf: number;

  @Column("float", { name: "IARE_VL", precision: 126, default: () => "0" })
  iareVl: number;

  @Column("float", { name: "IARE_CTMLX", precision: 126, default: () => "0" })
  iareCtmlx: number;

  @Column("float", { name: "IARE_CTLK", precision: 126, default: () => "0" })
  iareCtlk: number;

  @Column("float", {
    name: "IARE_VACTLABC",
    precision: 126,
    default: () => "0",
  })
  iareVactlabc: number;

  @Column("float", { name: "IARE_VACTL", precision: 126, default: () => "0" })
  iareVactl: number;

  @Column("number", { name: "IARE_ESCENARIO", default: () => "0" })
  iareEscenario: number;

  @Column("date", {
    name: "IARE_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  iareFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA", default: () => "0" })
  usuaUsua: number;

  @Column("float", { name: "IARE_C", precision: 126, default: () => "0" })
  iareC: number;
}
