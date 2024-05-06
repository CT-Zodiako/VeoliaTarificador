import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_SEGMENTOSCCS", ["segmId", "paraTipofacturacion20008"], {
  unique: true,
})
@Entity("AUCO_SEGMENTOSCCS")
export class AucoSegmentosccs {
  @Column("number", { primary: true, name: "SEGM_ID" })
  segmId: number;

  @Column("number", { primary: true, name: "PARA_TIPOFACTURACION20008" })
  paraTipofacturacion20008: number;

  @Column("float", { name: "SEGM_VALOR", precision: 126 })
  segmValor: number;

  @Column("date", {
    name: "SEGM_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  segmFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
