import { Column, Entity, Index } from "typeorm";

@Index(
  "IXAUCO_REVEEMPRDIVI01",
  ["reveId", "emprEmpr", "diviDivi", "inedAnno", "inedMes"],
  { unique: true }
)
@Index("PK_AUCO_REVEEMPRDIVI", ["reveId", "inedId"], { unique: true })
@Entity("AUCO_REVEEMPRDIVI")
export class AucoReveemprdivi {
  @Column("number", { primary: true, name: "REVE_ID" })
  reveId: number;

  @Column("number", { primary: true, name: "INED_ID" })
  inedId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "INED_ANNO" })
  inedAnno: number;

  @Column("number", { name: "INED_MES" })
  inedMes: number;

  @Column("float", { name: "INED_CBLJ", precision: 126 })
  inedCblj: number;

  @Column("float", { name: "INED_LBLJ", precision: 126 })
  inedLblj: number;

  @Column("float", { name: "INED_N", precision: 126 })
  inedN: number;

  @Column("float", { name: "INED_M3AGUA", precision: 126 })
  inedM3Agua: number;

  @Column("float", { name: "INED_CP", precision: 126 })
  inedCp: number;

  @Column("float", { name: "INED_M2CCJ", precision: 126 })
  inedM2Ccj: number;

  @Column("float", { name: "INED_M2LAVJ", precision: 126 })
  inedM2Lavj: number;

  @Column("float", { name: "INED_TIJ", precision: 126 })
  inedTij: number;

  @Column("float", { name: "INED_KLPJ", precision: 126 })
  inedKlpj: number;

  @Column("float", { name: "INED_TMJ", precision: 126 })
  inedTmj: number;

  @Column("float", { name: "INED_CLAVJ", precision: 126 })
  inedClavj: number;

  @Column("float", { name: "INED_QRTJ", precision: 126, default: () => "0" })
  inedQrtj: number;

  @Column("float", { name: "INED_QRSJ", precision: 126, default: () => "0" })
  inedQrsj: number;

  @Column("date", {
    name: "INED_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  inedFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA", default: () => "0" })
  usuaUsua: number;
}
