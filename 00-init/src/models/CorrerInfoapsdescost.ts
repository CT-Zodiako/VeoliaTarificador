import { Column, Entity } from "typeorm";

@Entity("CORRER_INFOAPSDESCOST")
export class CorrerInfoapsdescost {
  @Column("number", { name: "DESC_ID" })
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

  @Column("number", { name: "DESC_ESTADO" })
  descEstado: number;

  @Column("date", { name: "DESC_FECHACREACION", nullable: true })
  descFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
