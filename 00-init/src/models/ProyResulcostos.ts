import { Column, Entity, Index } from "typeorm";

@Index(
  "IX_PROY_RESULCOSTOS",
  ["proyId", "apsaId", "tipoFact", "costAnno", "costMes"],
  { unique: true }
)
@Index("PK_PROY_RESULCOSTOS", ["costId"], { unique: true })
@Entity("PROY_RESULCOSTOS")
export class ProyResulcostos {
  @Column("float", { name: "COST_INC", precision: 126, default: () => "0" })
  costInc: number;

  @Column("number", { primary: true, name: "COST_ID" })
  costId: number;

  @Column("number", { name: "PROY_ID" })
  proyId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "TIPO_FACT" })
  tipoFact: number;

  @Column("number", { name: "COST_ANNO" })
  costAnno: number;

  @Column("number", { name: "COST_MES" })
  costMes: number;

  @Column("float", { name: "COST_CCS", precision: 126, default: () => "0" })
  costCcs: number;

  @Column("float", { name: "COST_CCSAPRO", precision: 126, default: () => "0" })
  costCcsapro: number;

  @Column("float", { name: "COST_CBL", precision: 126, default: () => "0" })
  costCbl: number;

  @Column("float", { name: "COST_CLUS", precision: 126, default: () => "0" })
  costClus: number;

  @Column("float", { name: "COST_CRT", precision: 126, default: () => "0" })
  costCrt: number;

  @Column("float", { name: "COST_CDF", precision: 126, default: () => "0" })
  costCdf: number;

  @Column("float", { name: "COST_IAT", precision: 126, default: () => "0" })
  costIat: number;

  @Column("float", { name: "COST_CTL", precision: 126, default: () => "0" })
  costCtl: number;

  @Column("float", { name: "COST_VBA", precision: 126, default: () => "0" })
  costVba: number;

  @Column("number", { name: "COST_ESTADO", default: () => "1" })
  costEstado: number;

  @Column("date", {
    name: "COST_FECHA",
    nullable: true,
    default: () => "sysdate",
  })
  costFecha: Date | null;

  @Column("number", { name: "COST_USUA" })
  costUsua: number;
}
