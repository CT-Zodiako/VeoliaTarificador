import { Column, Entity } from "typeorm";

@Entity("MIGINFTERCERO")
export class Miginftercero {
  @Column("float", { name: "VACRTABC", nullable: true, precision: 126 })
  vacrtabc: number | null;

  @Column("float", { name: "VACDF", nullable: true, precision: 126 })
  vacdf: number | null;

  @Column("float", { name: "VACDFABC", nullable: true, precision: 126 })
  vacdfabc: number | null;

  @Column("float", { name: "NA_1", nullable: true, precision: 126 })
  na_1: number | null;

  @Column("float", { name: "QA", nullable: true, precision: 126 })
  qa: number | null;

  @Column("float", { name: "TAFA", nullable: true, precision: 126 })
  tafa: number | null;

  @Column("number", { name: "CODAPS", nullable: true })
  codaps: number | null;

  @Column("varchar2", { name: "NOMAPS", nullable: true, length: 150 })
  nomaps: string | null;

  @Column("number", { name: "CODEMP", nullable: true })
  codemp: number | null;

  @Column("varchar2", { name: "NOMEMP", nullable: true, length: 150 })
  nomemp: string | null;

  @Column("number", { name: "ANNO", nullable: true })
  anno: number | null;

  @Column("number", { name: "MES", nullable: true })
  mes: number | null;

  @Column("float", { name: "N", nullable: true, precision: 126 })
  n: number | null;

  @Column("float", { name: "NA", nullable: true, precision: 126 })
  na: number | null;

  @Column("float", { name: "ND", nullable: true, precision: 126 })
  nd: number | null;

  @Column("float", { name: "TAFNA", nullable: true, precision: 126 })
  tafna: number | null;

  @Column("float", { name: "MTS3AGUA", nullable: true, precision: 126 })
  mts3Agua: number | null;

  @Column("float", { name: "QRT", nullable: true, precision: 126 })
  qrt: number | null;

  @Column("float", { name: "QLU", nullable: true, precision: 126 })
  qlu: number | null;

  @Column("float", { name: "QNA", nullable: true, precision: 126 })
  qna: number | null;

  @Column("float", { name: "QBL", nullable: true, precision: 126 })
  qbl: number | null;

  @Column("float", { name: "QRECHAZO", nullable: true, precision: 126 })
  qrechazo: number | null;

  @Column("float", { name: "QRS", nullable: true, precision: 126 })
  qrs: number | null;

  @Column("float", { name: "CBLJ", nullable: true, precision: 126 })
  cblj: number | null;

  @Column("float", { name: "LBL", nullable: true, precision: 126 })
  lbl: number | null;

  @Column("float", { name: "M2CC", nullable: true, precision: 126 })
  m2Cc: number | null;

  @Column("float", { name: "M2LAV", nullable: true, precision: 126 })
  m2Lav: number | null;

  @Column("float", { name: "T_I", nullable: true, precision: 126 })
  tI: number | null;

  @Column("float", { name: "TM", nullable: true, precision: 126 })
  tm: number | null;

  @Column("float", { name: "KLP", nullable: true, precision: 126 })
  klp: number | null;

  @Column("float", { name: "VL", nullable: true, precision: 126 })
  vl: number | null;

  @Column("float", { name: "ESCENA", nullable: true, precision: 126 })
  escena: number | null;

  @Column("float", { name: "T", nullable: true, precision: 126 })
  t: number | null;

  @Column("float", { name: "CPE", nullable: true, precision: 126 })
  cpe: number | null;

  @Column("float", { name: "CTLMX", nullable: true, precision: 126 })
  ctlmx: number | null;

  @Column("float", { name: "VACRT", nullable: true, precision: 126 })
  vacrt: number | null;
}
