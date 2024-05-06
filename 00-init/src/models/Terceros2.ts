import { Column, Entity } from "typeorm";

@Entity("TERCEROS2")
export class Terceros2 {
  @Column("float", { name: "CODAPS", nullable: true, precision: 126 })
  codaps: number | null;

  @Column("varchar2", { name: "APS", nullable: true, length: 150 })
  aps: string | null;

  @Column("float", { name: "CODEMP", nullable: true, precision: 126 })
  codemp: number | null;

  @Column("varchar2", { name: "NOMEMP", nullable: true, length: 150 })
  nomemp: string | null;

  @Column("float", { name: "ANNO", nullable: true, precision: 126 })
  anno: number | null;

  @Column("float", { name: "MES", nullable: true, precision: 126 })
  mes: number | null;

  @Column("float", { name: "M2CC", nullable: true, precision: 126 })
  m2Cc: number | null;

  @Column("float", { name: "M2LAV", nullable: true, precision: 126 })
  m2Lav: number | null;

  @Column("float", { name: "TII", nullable: true, precision: 126 })
  tii: number | null;

  @Column("float", { name: "TM", nullable: true, precision: 126 })
  tm: number | null;

  @Column("float", { name: "KLP", nullable: true, precision: 126 })
  klp: number | null;
}
