import { Column, Entity, Index } from "typeorm";

@Index(
  "IXPROY_LINEACOSTOS01",
  ["proyId", "apsaId", "costo20010", "licoAnno", "licoMes"],
  { unique: true }
)
@Index("PK_PROY_LINEACOSTOS", ["licoId"], { unique: true })
@Entity("PROY_LINEACOSTOS")
export class ProyLineacostos {
  @Column("number", { primary: true, name: "LICO_ID" })
  licoId: number;

  @Column("number", { name: "PROY_ID" })
  proyId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "COSTO20010" })
  costo20010: number;

  @Column("number", { name: "LICO_ANNO" })
  licoAnno: number;

  @Column("number", { name: "LICO_MES" })
  licoMes: number;

  @Column("float", { name: "LICO_VARIACION", precision: 126 })
  licoVariacion: number;

  @Column("date", {
    name: "LICO_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  licoFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
