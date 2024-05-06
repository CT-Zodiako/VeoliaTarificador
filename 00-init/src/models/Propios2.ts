import { Column, Entity } from "typeorm";

@Entity("PROPIOS2")
export class Propios2 {
  @Column("number", { name: "CODAPS", nullable: true, scale: 0 })
  codaps: number | null;

  @Column("varchar2", { name: "APS", nullable: true, length: 150 })
  aps: string | null;

  @Column("number", { name: "CODEMP", nullable: true, scale: 0 })
  codemp: number | null;

  @Column("varchar2", { name: "NOMEMP", nullable: true, length: 150 })
  nomemp: string | null;

  @Column("float", { name: "ANNO", nullable: true, precision: 126 })
  anno: number | null;

  @Column("float", { name: "MES", nullable: true, precision: 126 })
  mes: number | null;

  @Column("float", { name: "NA", nullable: true, precision: 126 })
  na: number | null;

  @Column("float", { name: "ND", nullable: true, precision: 126 })
  nd: number | null;

  @Column("float", { name: "TAFNA", nullable: true, precision: 126 })
  tafna: number | null;

  @Column("float", { name: "MTS3AGUA", nullable: true, precision: 126 })
  mts3Agua: number | null;

  @Column("float", { name: "QLU", nullable: true, precision: 126 })
  qlu: number | null;

  @Column("float", { name: "QNA", nullable: true, precision: 126 })
  qna: number | null;

  @Column("float", { name: "QBL", nullable: true, precision: 126 })
  qbl: number | null;

  @Column("float", { name: "QRECHAZO", nullable: true, precision: 126 })
  qrechazo: number | null;

  @Column("float", { name: "M2CC", nullable: true, precision: 126 })
  m2Cc: number | null;

  @Column("float", { name: "M2LAV", nullable: true, precision: 126 })
  m2Lav: number | null;

  @Column("float", { name: "TII", nullable: true, precision: 126 })
  tii: number | null;

  @Column("float", { name: "TM", nullable: true, precision: 126 })
  tm: number | null;

  @Column("float", { name: "KLP", nullable: true, precision: 126 })
  klp: number | null;

  @Column("float", { name: "NA_1", nullable: true, precision: 126 })
  na_1: number | null;

  @Column("float", { name: "QA", nullable: true, precision: 126 })
  qa: number | null;

  @Column("float", { name: "TAFA", nullable: true, precision: 126 })
  tafa: number | null;
}
