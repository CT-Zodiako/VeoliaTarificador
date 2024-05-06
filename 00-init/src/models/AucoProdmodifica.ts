import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_AUCO_PRODMODIFICA",
  ["apsaId", "emprEmpr", "costo20010", "prmdAnno", "prmdMes"],
  { unique: true }
)
@Entity("AUCO_PRODMODIFICA")
export class AucoProdmodifica {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "EMPR_EMPR", scale: 0 })
  emprEmpr: number;

  @Column("number", { primary: true, name: "COSTO20010", scale: 0 })
  costo20010: number;

  @Column("number", { primary: true, name: "PRMD_ANNO", scale: 0 })
  prmdAnno: number;

  @Column("number", { primary: true, name: "PRMD_MES", scale: 0 })
  prmdMes: number;

  @Column("float", { name: "PRMD_VALOR", precision: 126 })
  prmdValor: number;

  @Column("date", { name: "PRMD_FECHA", default: () => "sysdate" })
  prmdFecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
