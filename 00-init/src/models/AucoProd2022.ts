import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_AUCO_PROD2022",
  ["apsaId", "emprEmpr", "costo20010", "pr22Anno", "pr22Mes"],
  { unique: true }
)
@Entity("AUCO_PROD2022")
export class AucoProd2022 {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "EMPR_EMPR", scale: 0 })
  emprEmpr: number;

  @Column("number", { primary: true, name: "COSTO20010", scale: 0 })
  costo20010: number;

  @Column("number", { primary: true, name: "PR22_ANNO", scale: 0 })
  pr22Anno: number;

  @Column("number", { primary: true, name: "PR22_MES", scale: 0 })
  pr22Mes: number;

  @Column("float", { name: "PR22_VALOR", precision: 126 })
  pr22Valor: number;

  @Column("date", { name: "PR22_FECHA", default: () => "sysdate" })
  pr22Fecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
