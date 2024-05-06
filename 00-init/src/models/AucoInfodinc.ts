import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_INFODINC", ["dincId"], { unique: true })
@Entity("AUCO_INFODINC")
export class AucoInfodinc {
  @Column("number", { primary: true, name: "DINC_ID" })
  dincId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "DINC_ANNO" })
  dincAnno: number;

  @Column("number", { name: "DINC_MES" })
  dincMes: number;

  @Column("float", { name: "DINC_VALOR", precision: 126 })
  dincValor: number;

  @Column("number", { name: "DINC_ESTADO", default: () => "1" })
  dincEstado: number;

  @Column("date", {
    name: "DINC_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  dincFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
