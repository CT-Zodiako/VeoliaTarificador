import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_PROY_PRODUCTIVIDAD",
  ["proyId", "apsaId", "costo20010", "costAnno", "costMes"],
  { unique: true }
)
@Entity("PROY_PRODUCTIVIDAD")
export class ProyProductividad {
  @Column("number", { primary: true, name: "PROY_ID" })
  proyId: number;

  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "COSTO20010" })
  costo20010: number;

  @Column("number", { primary: true, name: "COST_ANNO" })
  costAnno: number;

  @Column("number", { primary: true, name: "COST_MES" })
  costMes: number;

  @Column("float", { name: "COST_VARIACION", precision: 126 })
  costVariacion: number;

  @Column("date", {
    name: "COST_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  costFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
