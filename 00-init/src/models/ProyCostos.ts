import { Column, Entity, Index } from "typeorm";

@Index(
  "IXPROY_COSTOS01",
  ["proyId", "apsaId", "costo20010", "costAnno", "costMes", "costVariacion"],
  { unique: true }
)
@Index("PK_PROY_COSTOS", ["costId"], { unique: true })
@Entity("PROY_COSTOS")
export class ProyCostos {
  @Column("number", { primary: true, name: "COST_ID" })
  costId: number;

  @Column("number", { name: "PROY_ID" })
  proyId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "COSTO20010" })
  costo20010: number;

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
