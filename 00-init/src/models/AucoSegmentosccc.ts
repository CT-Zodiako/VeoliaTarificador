import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_SEGMENTOSCCC", ["seccId"], { unique: true })
@Entity("AUCO_SEGMENTOSCCC")
export class AucoSegmentosccc {
  @Column("number", { primary: true, name: "SECC_ID" })
  seccId: number;

  @Column("float", { name: "SECC_VALOR", precision: 126 })
  seccValor: number;

  @Column("date", {
    name: "SECC_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  seccFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
