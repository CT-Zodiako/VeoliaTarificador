import { Column, Entity } from "typeorm";

@Entity("USUARIOS3")
export class Usuarios3 {
  @Column("float", { name: "CODAPS", nullable: true, precision: 126 })
  codaps: number | null;

  @Column("varchar2", { name: "APS", nullable: true, length: 150 })
  aps: string | null;

  @Column("float", { name: "ANNO", nullable: true, precision: 126 })
  anno: number | null;

  @Column("float", { name: "MES", nullable: true, precision: 126 })
  mes: number | null;

  @Column("float", { name: "CODUSO", nullable: true, precision: 126 })
  coduso: number | null;

  @Column("varchar2", { name: "NOMUSO", nullable: true, length: 150 })
  nomuso: string | null;

  @Column("float", { name: "CODTARIFA", nullable: true, precision: 126 })
  codtarifa: number | null;

  @Column("varchar2", { name: "NOMTARIFA", nullable: true, length: 150 })
  nomtarifa: string | null;

  @Column("float", { name: "CODPROD", nullable: true, precision: 126 })
  codprod: number | null;

  @Column("varchar2", { name: "NOMPROD", nullable: true, length: 150 })
  nomprod: string | null;

  @Column("varchar2", { name: "NUMERO", nullable: true, length: 150 })
  numero: string | null;

  @Column("float", { name: "CANTIDAD", nullable: true, precision: 126 })
  cantidad: number | null;

  @Column("float", { name: "TONELADAS", nullable: true, precision: 126 })
  toneladas: number | null;
}
