import { Column, Entity } from "typeorm";

@Entity("USUARIOS202")
export class Usuarios202 {
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

  @Column("float", { name: "SUSCP_MARZ", nullable: true, precision: 126 })
  suscpMarz: number | null;

  @Column("float", { name: "SUSCP_ABRIL", nullable: true, precision: 126 })
  suscpAbril: number | null;

  @Column("float", { name: "SUSCP_MAYO", nullable: true, precision: 126 })
  suscpMayo: number | null;

  @Column("float", { name: "SUSCP_JUN", nullable: true, precision: 126 })
  suscpJun: number | null;

  @Column("float", { name: "AFORO_ENE", nullable: true, precision: 126 })
  aforoEne: number | null;

  @Column("float", { name: "AFORO_FEB", nullable: true, precision: 126 })
  aforoFeb: number | null;

  @Column("float", { name: "AFORO_MARZ", nullable: true, precision: 126 })
  aforoMarz: number | null;

  @Column("float", { name: "AFORO_ABRIL", nullable: true, precision: 126 })
  aforoAbril: number | null;

  @Column("float", { name: "AFORO_MAYO", nullable: true, precision: 126 })
  aforoMayo: number | null;

  @Column("float", { name: "AFORO_JUN", nullable: true, precision: 126 })
  aforoJun: number | null;
}
