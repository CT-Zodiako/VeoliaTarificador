import { Column, Entity } from "typeorm";

@Entity("USUARIOS20202")
export class Usuarios20202 {
  @Column("number", { name: "CODAPS", nullable: true, scale: 0 })
  codaps: number | null;

  @Column("varchar2", { name: "APS", nullable: true, length: 200 })
  aps: string | null;

  @Column("number", { name: "ANNO", nullable: true, scale: 0 })
  anno: number | null;

  @Column("number", { name: "MES", nullable: true, scale: 0 })
  mes: number | null;

  @Column("number", { name: "CODUSO", nullable: true, scale: 0 })
  coduso: number | null;

  @Column("varchar2", { name: "NOMUSO", nullable: true, length: 200 })
  nomuso: string | null;

  @Column("number", { name: "CODFACTOR", nullable: true, scale: 0 })
  codfactor: number | null;

  @Column("float", { name: "VALORFACTOR", nullable: true, precision: 126 })
  valorfactor: number | null;

  @Column("number", { name: "CODTIPO", nullable: true, scale: 0 })
  codtipo: number | null;

  @Column("varchar2", { name: "NOMTIPO", nullable: true, length: 200 })
  nomtipo: string | null;

  @Column("float", { name: "CANTIDAD", nullable: true, precision: 126 })
  cantidad: number | null;

  @Column("float", { name: "TONELADAS", nullable: true, precision: 126 })
  toneladas: number | null;
}
