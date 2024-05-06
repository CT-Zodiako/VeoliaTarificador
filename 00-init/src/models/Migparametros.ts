import { Column, Entity } from "typeorm";

@Entity("MIGPARAMETROS")
export class Migparametros {
  @Column("number", { name: "RELLPROPIO", nullable: true })
  rellpropio: number | null;

  @Column("number", { name: "CDFCTL", nullable: true })
  cdfctl: number | null;

  @Column("number", { name: "CODAPS", nullable: true })
  codaps: number | null;

  @Column("varchar2", { name: "NOMAPS", nullable: true, length: 150 })
  nomaps: string | null;

  @Column("number", { name: "APROVECHA", nullable: true })
  aprovecha: number | null;

  @Column("number", { name: "TIPOFACT", nullable: true })
  tipofact: number | null;

  @Column("number", { name: "SEGM", nullable: true })
  segm: number | null;

  @Column("number", { name: "SALINIDAD", nullable: true })
  salinidad: number | null;

  @Column("number", { name: "CODDANE", nullable: true })
  coddane: number | null;

  @Column("varchar2", { name: "MPIO", nullable: true, length: 150 })
  mpio: string | null;

  @Column("number", { name: "CODRELL", nullable: true })
  codrell: number | null;

  @Column("varchar2", { name: "NOMRELL", nullable: true, length: 150 })
  nomrell: string | null;

  @Column("float", { name: "DISPAV", nullable: true, precision: 126 })
  dispav: number | null;

  @Column("float", { name: "DISDESPA", nullable: true, precision: 126 })
  disdespa: number | null;

  @Column("varchar2", { name: "DISTOT", nullable: true, length: 150 })
  distot: string | null;
}
