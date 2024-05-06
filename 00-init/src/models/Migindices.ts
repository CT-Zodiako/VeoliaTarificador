import { Column, Entity } from "typeorm";

@Entity("MIGINDICES")
export class Migindices {
  @Column("number", { name: "ANNO", nullable: true })
  anno: number | null;

  @Column("number", { name: "MES", nullable: true })
  mes: number | null;

  @Column("number", { name: "CODIND", nullable: true })
  codind: number | null;

  @Column("varchar2", { name: "NOMIND", nullable: true, length: 30 })
  nomind: string | null;

  @Column("float", { name: "VALOR", nullable: true, precision: 126 })
  valor: number | null;

  @Column("number", { name: "REAL", nullable: true, scale: 0 })
  real: number | null;
}
