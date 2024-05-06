import { Column, Entity, Index } from "typeorm";

@Index(
  "IXAUCO_INFOAPSDESCOST01",
  ["apsaId", "descAnno", "descMes", "paraCosto20010"],
  { unique: true }
)
@Index("PK_AUCO_INFOAPSDESCOST", ["descId"], { unique: true })
@Entity("AUCO_INFOAPSDESCOST")
export class AucoInfoapsdescost {
  @Column("number", { name: "DESC_ESTADO", default: () => "1" })
  descEstado: number;

  @Column("date", {
    name: "DESC_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  descFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", { primary: true, name: "DESC_ID" })
  descId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "DESC_ANNO" })
  descAnno: number;

  @Column("number", { name: "DESC_MES" })
  descMes: number;

  @Column("number", { name: "PARA_COSTO20010" })
  paraCosto20010: number;

  @Column("float", { name: "DESC_VALOR", precision: 126 })
  descValor: number;
}
