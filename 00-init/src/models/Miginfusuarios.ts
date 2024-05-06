import { Column, Entity } from "typeorm";

@Entity("MIGINFUSUARIOS")
export class Miginfusuarios {
  @Column("number", { name: "CODAPS", nullable: true })
  codaps: number | null;

  @Column("varchar2", { name: "NOMAPS", nullable: true, length: 150 })
  nomaps: string | null;

  @Column("number", { name: "ANNO", nullable: true })
  anno: number | null;

  @Column("number", { name: "MES", nullable: true })
  mes: number | null;

  @Column("number", { name: "CODUSO", nullable: true })
  coduso: number | null;

  @Column("varchar2", { name: "NOMUSO", nullable: true, length: 150 })
  nomuso: string | null;

  @Column("number", { name: "CODTAR", nullable: true })
  codtar: number | null;

  @Column("varchar2", { name: "NOMTAR", nullable: true, length: 150 })
  nomtar: string | null;

  @Column("number", { name: "CODFACPROD", nullable: true })
  codfacprod: number | null;

  @Column("varchar2", { name: "NOMFACPROD", nullable: true, length: 150 })
  nomfacprod: string | null;

  @Column("float", { name: "CANTIDAD", nullable: true, precision: 126 })
  cantidad: number | null;

  @Column("float", { name: "TONELADAS", nullable: true, precision: 126 })
  toneladas: number | null;
}
