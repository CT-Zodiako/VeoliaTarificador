import { Column, Entity, Index } from "typeorm";

@Index(
  "IX_AUCO_COSTOSCLUS_01",
  ["emprEmpr", "diviDivi", "paraCosto20021", "costAnno", "costMes"],
  {}
)
@Index("PK_AUCO_COSTOSCLUS", ["costId"], { unique: true })
@Entity("AUCO_COSTOSCLUS")
export class AucoCostosclus {
  @Column("number", { primary: true, name: "COST_ID" })
  costId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "PARA_COSTO20021" })
  paraCosto20021: number;

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
}
