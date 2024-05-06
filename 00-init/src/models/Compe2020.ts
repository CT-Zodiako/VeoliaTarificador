import { Column, Entity } from "typeorm";

@Entity("COMPE2020")
export class Compe2020 {
  @Column("float", { name: "CDFVBA", nullable: true, precision: 126 })
  cdfvba: number | null;

  @Column("float", { name: "QRTCOM", nullable: true, precision: 126 })
  qrtcom: number | null;

  @Column("float", { name: "CTLRELL", nullable: true, precision: 126 })
  ctlrell: number | null;

  @Column("float", { name: "INCEN", nullable: true, precision: 126 })
  incen: number | null;

  @Column("float", { name: "CDFRELL", nullable: true, precision: 126 })
  cdfrell: number | null;

  @Column("number", { name: "CODAPS", nullable: true, scale: 0 })
  codaps: number | null;

  @Column("varchar2", { name: "NOMAPS", nullable: true, length: 200 })
  nomaps: string | null;

  @Column("number", { name: "CODEMPR", nullable: true, scale: 0 })
  codempr: number | null;

  @Column("varchar2", { name: "NOMEMPR", nullable: true, length: 200 })
  nomempr: string | null;

  @Column("number", { name: "ANNO", nullable: true, scale: 0 })
  anno: number | null;

  @Column("number", { name: "MES", nullable: true, scale: 0 })
  mes: number | null;

  @Column("float", { name: "N", nullable: true, precision: 126 })
  n: number | null;

  @Column("float", { name: "NAA", nullable: true, precision: 126 })
  naa: number | null;

  @Column("float", { name: "NDA", nullable: true, precision: 126 })
  nda: number | null;

  @Column("float", { name: "TAFNA", nullable: true, precision: 126 })
  tafna: number | null;

  @Column("float", { name: "MT3AGUA", nullable: true, precision: 126 })
  mt3Agua: number | null;

  @Column("float", { name: "QRT", nullable: true, precision: 126 })
  qrt: number | null;

  @Column("float", { name: "QLU", nullable: true, precision: 126 })
  qlu: number | null;

  @Column("float", { name: "QNA", nullable: true, precision: 126 })
  qna: number | null;

  @Column("float", { name: "QBL", nullable: true, precision: 126 })
  qbl: number | null;

  @Column("float", { name: "QR", nullable: true, precision: 126 })
  qr: number | null;

  @Column("float", { name: "QRS", nullable: true, precision: 126 })
  qrs: number | null;

  @Column("float", { name: "CBLJ", nullable: true, precision: 126 })
  cblj: number | null;

  @Column("float", { name: "LBLCOM", nullable: true, precision: 126 })
  lblcom: number | null;

  @Column("float", { name: "M2CC", nullable: true, precision: 126 })
  m2Cc: number | null;

  @Column("float", { name: "M2LAV", nullable: true, precision: 126 })
  m2Lav: number | null;

  @Column("float", { name: "TI", nullable: true, precision: 126 })
  ti: number | null;

  @Column("float", { name: "TM", nullable: true, precision: 126 })
  tm: number | null;

  @Column("float", { name: "KLP", nullable: true, precision: 126 })
  klp: number | null;

  @Column("float", { name: "VL", nullable: true, precision: 126 })
  vl: number | null;

  @Column("float", { name: "ESCEN", nullable: true, precision: 126 })
  escen: number | null;

  @Column("float", { name: "T", nullable: true, precision: 126 })
  t: number | null;

  @Column("float", { name: "CPE", nullable: true, precision: 126 })
  cpe: number | null;

  @Column("float", { name: "CTLMX", nullable: true, precision: 126 })
  ctlmx: number | null;

  @Column("float", { name: "VACRT", nullable: true, precision: 126 })
  vacrt: number | null;

  @Column("float", { name: "VACRTABC", nullable: true, precision: 126 })
  vacrtabc: number | null;

  @Column("float", { name: "VACDF", nullable: true, precision: 126 })
  vacdf: number | null;

  @Column("float", { name: "VACDFABC", nullable: true, precision: 126 })
  vacdfabc: number | null;

  @Column("float", { name: "NA_2", nullable: true, precision: 126 })
  na_2: number | null;

  @Column("float", { name: "QA", nullable: true, precision: 126 })
  qa: number | null;

  @Column("float", { name: "TAFA", nullable: true, precision: 126 })
  tafa: number | null;

  @Column("float", { name: "CRTVBA", nullable: true, precision: 126 })
  crtvba: number | null;
}
