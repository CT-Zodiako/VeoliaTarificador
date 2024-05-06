import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_CPTECHO", ["apsaId", "cpteId"], { unique: true })
@Entity("AUCO_CPTECHO")
export class AucoCptecho {
  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "CPTE_ID" })
  cpteId: number;

  @Column("number", { name: "CPTE_PERINICIO" })
  cptePerinicio: number;

  @Column("number", { name: "CPTE_PERFIN", nullable: true })
  cptePerfin: number | null;

  @Column("float", { name: "CPTE_VALOR", precision: 126 })
  cpteValor: number;

  @Column("float", { name: "CPTE_VARIACION", precision: 126 })
  cpteVariacion: number;

  @Column("date", {
    name: "CPTE_FECCREA",
    nullable: true,
    default: () => "sysdate",
  })
  cpteFeccrea: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
