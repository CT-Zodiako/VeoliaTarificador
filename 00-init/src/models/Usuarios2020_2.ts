import { Column, Entity } from "typeorm";

@Entity("USUARIOS2020_2")
export class Usuarios2020_2 {
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

  @Column("float", { name: "SUSCP_JUL", nullable: true, precision: 126 })
  suscpJul: number | null;

  @Column("float", { name: "SUSCP_AGO", nullable: true, precision: 126 })
  suscpAgo: number | null;

  @Column("float", { name: "SUSCP_SEP", nullable: true, precision: 126 })
  suscpSep: number | null;

  @Column("float", { name: "SUSCP_OCT", nullable: true, precision: 126 })
  suscpOct: number | null;

  @Column("float", { name: "SUSCP_NOV", nullable: true, precision: 126 })
  suscpNov: number | null;

  @Column("float", { name: "SUSCP_DIC", nullable: true, precision: 126 })
  suscpDic: number | null;

  @Column("float", { name: "AFORO_JUL", nullable: true, precision: 126 })
  aforoJul: number | null;

  @Column("float", { name: "AFORO_AGO", nullable: true, precision: 126 })
  aforoAgo: number | null;

  @Column("float", { name: "AFORO_SEP", nullable: true, precision: 126 })
  aforoSep: number | null;

  @Column("float", { name: "AFORO_OCT", nullable: true, precision: 126 })
  aforoOct: number | null;

  @Column("float", { name: "AFORO_NOV", nullable: true, precision: 126 })
  aforoNov: number | null;

  @Column("float", { name: "AFORO_DIC", nullable: true, precision: 126 })
  aforoDic: number | null;
}
