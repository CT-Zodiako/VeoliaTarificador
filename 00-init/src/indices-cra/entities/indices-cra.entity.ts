import { Column, Entity, Index } from "typeorm";

@Index("IXAUCO_INDICESCRA01", ["PARA_INDICE20011", "INDI_ANNO", "INDI_MES"], {
  unique: true,
})
@Index("PK_TAR_INDICESCRA", ["INDI_ID"], { unique: true })
@Entity("AUCO_INDICESCRA")
export class AucoIndicescra {
  @Column("number", { primary: true, name: "INDI_ID" })
  INDI_ID: number;

  @Column("number", { name: "PARA_INDICE20011" })
  PARA_INDICE20011: number;

  @Column("number", { name: "INDI_ANNO" })
  INDI_ANNO: number;

  @Column("number", { name: "INDI_MES" })
  INDI_MES: number;

  @Column("number", { name: "INDI_ESTADO", default: () => "1" })
  INDI_ESTADO: number;

  @Column("float", { name: "INDI_VALOR", precision: 126 })
  INDI_VALOR: number;

  @Column("float", { name: "INDI_MITADVALOR", precision: 126 })
  INDI_MITADVALOR: number;

  @Column("date", {
    name: "INDI_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  INDI_FECHACREACION: Date | null;

  @Column("number", { name: "USUA_USUA" })
  USUA_USUA: number;
}
