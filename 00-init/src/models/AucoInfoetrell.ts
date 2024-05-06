import { Column, Entity, Index } from "typeorm";

@Index("IX_AUCO_INFOETRELL_01", ["estaId", "rellId", "ietrAnno", "ietrMes"], {})
@Index("PK_AUCO_INFOETRELL", ["ietrId"], { unique: true })
@Entity("AUCO_INFOETRELL")
export class AucoInfoetrell {
  @Column("number", { primary: true, name: "IETR_ID" })
  ietrId: number;

  @Column("number", { name: "ESTA_ID" })
  estaId: number;

  @Column("number", { name: "RELL_ID" })
  rellId: number;

  @Column("number", { name: "IETR_ANNO" })
  ietrAnno: number;

  @Column("number", { name: "IETR_MES" })
  ietrMes: number;

  @Column("float", { name: "IETR_QAG", precision: 126 })
  ietrQag: number;

  @Column("float", { name: "IETR_QRTZ", precision: 126, default: () => "0" })
  ietrQrtz: number;

  @Column("float", { name: "IETR_TRR", precision: 126, default: () => "0" })
  ietrTrr: number;

  @Column("date", {
    name: "IETR_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  ietrFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA", default: () => "0" })
  usuaUsua: number;

  @Column("float", { name: "IAED_PRTG", precision: 126, default: () => "0" })
  iaedPrtg: number;
}
