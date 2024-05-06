import { Column, Entity } from "typeorm";

@Entity("USUARUIOSFINAL")
export class Usuaruiosfinal {
  @Column("number", { name: "S_DIC", nullable: true, scale: 0 })
  sDic: number | null;

  @Column("number", { name: "A_JUL", nullable: true, scale: 0 })
  aJul: number | null;

  @Column("number", { name: "A_AGO", nullable: true, scale: 0 })
  aAgo: number | null;

  @Column("number", { name: "A_SEP", nullable: true, scale: 0 })
  aSep: number | null;

  @Column("number", { name: "A_OCT", nullable: true, scale: 0 })
  aOct: number | null;

  @Column("number", { name: "A_NOV", nullable: true, scale: 0 })
  aNov: number | null;

  @Column("number", { name: "A_DIC", nullable: true, scale: 0 })
  aDic: number | null;

  @Column("number", { name: "S_SEP", nullable: true, scale: 0 })
  sSep: number | null;

  @Column("number", { name: "S_OCT", nullable: true, scale: 0 })
  sOct: number | null;

  @Column("number", { name: "S_NOV", nullable: true, scale: 0 })
  sNov: number | null;

  @Column("number", { name: "CODAPS", nullable: true, scale: 0 })
  codaps: number | null;

  @Column("varchar2", { name: "APS", nullable: true, length: 100 })
  aps: string | null;

  @Column("number", { name: "ANNO", nullable: true, scale: 0 })
  anno: number | null;

  @Column("number", { name: "CODUSO", nullable: true, scale: 0 })
  coduso: number | null;

  @Column("varchar2", { name: "NOMUSO", nullable: true, length: 100 })
  nomuso: string | null;

  @Column("number", { name: "CODFACTOR", nullable: true, scale: 0 })
  codfactor: number | null;

  @Column("number", { name: "CODTIPO", nullable: true, scale: 0 })
  codtipo: number | null;

  @Column("number", { name: "TIPO", nullable: true, scale: 0 })
  tipo: number | null;

  @Column("varchar2", { name: "TIPO_1", nullable: true, length: 100 })
  tipo_1: string | null;

  @Column("number", { name: "S_JUL", nullable: true, scale: 0 })
  sJul: number | null;

  @Column("number", { name: "S_AGO", nullable: true, scale: 0 })
  sAgo: number | null;
}
