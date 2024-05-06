import { Column, Entity } from "typeorm";

@Entity("CORRER_INFOAPSRELLENO")
export class CorrerInfoapsrelleno {
  @Column("number", { name: "IARE_ID" })
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

  @Column("float", { name: "IARE_CDFK", precision: 126 })
  iareCdfk: number;

  @Column("float", { name: "IARE_VACDFABC", precision: 126 })
  iareVacdfabc: number;

  @Column("float", { name: "IARE_VACDF", precision: 126 })
  iareVacdf: number;

  @Column("float", { name: "IARE_VL", precision: 126 })
  iareVl: number;

  @Column("float", { name: "IARE_CTMLX", precision: 126 })
  iareCtmlx: number;

  @Column("float", { name: "IARE_CTLK", precision: 126 })
  iareCtlk: number;

  @Column("float", { name: "IARE_VACTLABC", precision: 126 })
  iareVactlabc: number;

  @Column("float", { name: "IARE_VACTL", precision: 126 })
  iareVactl: number;

  @Column("number", { name: "IARE_ESCENARIO" })
  iareEscenario: number;

  @Column("date", { name: "IARE_FECHACREACION", nullable: true })
  iareFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("float", { name: "IARE_C", precision: 126 })
  iareC: number;
}
