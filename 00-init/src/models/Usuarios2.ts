import { Column, Entity } from "typeorm";

@Entity("USUARIOS2")
export class Usuarios2 {
  @Column("float", { name: "CODAPS", nullable: true, precision: 126 })
  codaps: number | null;

  @Column("varchar2", { name: "NOMAPS", nullable: true, length: 150 })
  nomaps: string | null;

  @Column("float", { name: "ANNO", nullable: true, precision: 126 })
  anno: number | null;

  @Column("float", { name: "MES", nullable: true, precision: 126 })
  mes: number | null;

  @Column("float", { name: "CODUSO", nullable: true, precision: 126 })
  coduso: number | null;

  @Column("varchar2", { name: "NOMUSO", nullable: true, length: 150 })
  nomuso: string | null;

  @Column("float", { name: "CODTARI", nullable: true, precision: 126 })
  codtari: number | null;

  @Column("varchar2", { name: "NOMTARI", nullable: true, length: 150 })
  nomtari: string | null;

  @Column("float", { name: "CODPROD", nullable: true, precision: 126 })
  codprod: number | null;

  @Column("varchar2", { name: "NOMPROD", nullable: true, length: 150 })
  nomprod: string | null;

  @Column("float", { name: "CANTIDAD", nullable: true, precision: 126 })
  cantidad: number | null;

  @Column("float", { name: "TONELADAS", nullable: true, precision: 126 })
  toneladas: number | null;
}
