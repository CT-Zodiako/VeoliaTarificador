import { Column, Entity } from "typeorm";

@Entity("MIGCOSTOS")
export class Migcostos {
  @Column("number", { name: "CODAPS", nullable: true })
  codaps: number | null;

  @Column("varchar2", { name: "NOMAPS", nullable: true, length: 50 })
  nomaps: string | null;

  @Column("number", { name: "ANNO", nullable: true })
  anno: number | null;

  @Column("number", { name: "MES", nullable: true })
  mes: number | null;

  @Column("number", { name: "CODIND", nullable: true })
  codind: number | null;

  @Column("varchar2", { name: "NOMIND", nullable: true, length: 50 })
  nomind: string | null;

  @Column("float", { name: "VLACU", nullable: true, precision: 126 })
  vlacu: number | null;

  @Column("float", { name: "VLENE", nullable: true, precision: 126 })
  vlene: number | null;

  @Column("float", { name: "VARIACION", nullable: true, precision: 126 })
  variacion: number | null;
}
