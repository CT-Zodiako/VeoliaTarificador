import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_PODATECHO", ["apsaId", "emprEmpr", "cpteAnno", "cpteMes"], {
  unique: true,
})
@Entity("AUCO_PODATECHO")
export class PodaEntity {
  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { primary: true, name: "CPTE_ANNO" })
  cpteAnno: number;

  @Column("number", { primary: true, name: "CPTE_MES" })
  cpteMes: number;

  @Column("float", { name: "CPTE_VALORSUI", precision: 126 })
  cpteValorsui: number;

  @Column("float", { name: "CPTE_VALORFACT", precision: 126 })
  cpteValorfact: number;

  @Column("float", { name: "CPTE_VARIACION", precision: 126 })
  cpteVariacion: number;

  @Column("number", { name: "CPTE_TIPINGRESO", default: () => "1" })
  cpteTipingreso: number;

  @Column("date", {
    name: "CPTE_FECCREA",
    nullable: true,
    default: () => "sysdate",
  })
  cpteFeccrea: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
