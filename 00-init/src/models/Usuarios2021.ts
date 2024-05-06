import { Column, Entity } from "typeorm";

@Entity("USUARIOS2021")
export class Usuarios2021 {
  @Column("number", { name: "CODAPS", nullable: true, scale: 0 })
  codaps: number | null;

  @Column("varchar2", { name: "APS", nullable: true, length: 200 })
  aps: string | null;

  @Column("number", { name: "ANNO", nullable: true, scale: 0 })
  anno: number | null;

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

  @Column("float", { name: "SUSCP_ENE", nullable: true, precision: 126 })
  suscpEne: number | null;

  @Column("float", { name: "SUSCP_FEB", nullable: true, precision: 126 })
  suscpFeb: number | null;

  @Column("float", { name: "SUSCP_MAR", nullable: true, precision: 126 })
  suscpMar: number | null;

  @Column("float", { name: "SUSCP_ABR", nullable: true, precision: 126 })
  suscpAbr: number | null;

  @Column("float", { name: "AFORO_ENE", nullable: true, precision: 126 })
  aforoEne: number | null;

  @Column("float", { name: "AFORO_FEB", nullable: true, precision: 126 })
  aforoFeb: number | null;

  @Column("float", { name: "AFORO_MAR", nullable: true, precision: 126 })
  aforoMar: number | null;

  @Column("float", { name: "AFORO_ABR", nullable: true, precision: 126 })
  aforoAbr: number | null;
}
