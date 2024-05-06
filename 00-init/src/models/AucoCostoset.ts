import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AucoEstarelle } from "./AucoEstarelle";

@Index(
  "IX_AUCO_COSTOSET_01",
  ["estaId", "rellId", "paraCosto20010", "costAnno", "costMes"],
  {}
)
@Index("PK_AUCO_COSTOSET", ["costId"], { unique: true })
@Entity("AUCO_COSTOSET")
export class AucoCostoset {
  @Column("number", { primary: true, name: "COST_ID" })
  costId: number;

  @Column("number", { name: "ESTA_ID" })
  estaId: number;

  @Column("number", { name: "RELL_ID" })
  rellId: number;

  @Column("number", { name: "PARA_COSTO20010" })
  paraCosto20010: number;

  @Column("number", { name: "COST_ANNO" })
  costAnno: number;

  @Column("number", { name: "COST_MES" })
  costMes: number;

  @Column("float", { name: "COST_VARIACION", precision: 126 })
  costVariacion: number;

  @Column("float", { name: "COST_VALOR", precision: 126 })
  costValor: number;

  @Column("float", { name: "COST_MEDIOVALOR", precision: 126 })
  costMediovalor: number;

  @Column("float", { name: "COST_ACOBRAR", precision: 126 })
  costAcobrar: number;

  @Column("date", {
    name: "COST_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  costFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @ManyToOne(
    () => AucoEstarelle,
    (aucoEstarelle) => aucoEstarelle.aucoCostosets
  )
  @JoinColumn([
    { name: "RELL_ID", referencedColumnName: "rellId" },
    { name: "ESTA_ID", referencedColumnName: "estaId" },
  ])
  aucoEstarelle: AucoEstarelle;
}
