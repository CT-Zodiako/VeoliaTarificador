import { Column, Entity } from "typeorm";

@Entity("CORRER_INFODINC")
export class CorrerInfodinc {
  @Column("number", { name: "DINC_ID" })
  dincId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "DINC_ANNO" })
  dincAnno: number;

  @Column("number", { name: "DINC_MES" })
  dincMes: number;

  @Column("float", { name: "DINC_VALOR", precision: 126 })
  dincValor: number;

  @Column("number", { name: "DINC_ESTADO" })
  dincEstado: number;

  @Column("date", { name: "DINC_FECHACREACION", nullable: true })
  dincFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
