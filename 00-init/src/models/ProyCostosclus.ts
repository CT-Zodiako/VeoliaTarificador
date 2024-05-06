import { Column, Entity, Index } from "typeorm";

@Index(
  "IX_PROY_COSTOSCLUS_01",
  ["proyId", "apsaId", "costo20021", "costAnno", "costMes"],
  {}
)
@Index("PK_PROY_COSTOSCLUS", ["costId"], { unique: true })
@Entity("PROY_COSTOSCLUS")
export class ProyCostosclus {
  @Column("number", { primary: true, name: "COST_ID" })
  costId: number;

  @Column("number", { name: "PROY_ID" })
  proyId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "COSTO20021" })
  costo20021: number;

  @Column("number", { name: "COST_ANNO" })
  costAnno: number;

  @Column("number", { name: "COST_MES" })
  costMes: number;

  @Column("float", { name: "COST_VARIACION", precision: 126 })
  costVariacion: number;

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
