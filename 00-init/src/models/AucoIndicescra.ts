import { Column, Entity, Index } from "typeorm";

@Index("IXAUCO_INDICESCRA01", ["paraIndice20011", "indiAnno", "indiMes"], {
  unique: true,
})
@Index("PK_TAR_INDICESCRA", ["indiId"], { unique: true })
@Entity("AUCO_INDICESCRA")
export class AucoIndicescra {
  @Column("number", { primary: true, name: "INDI_ID" })
  indiId: number;

  @Column("number", { name: "PARA_INDICE20011" })
  paraIndice20011: number;

  @Column("number", { name: "INDI_ANNO" })
  indiAnno: number;

  @Column("number", { name: "INDI_MES" })
  indiMes: number;

  @Column("number", { name: "INDI_ESTADO", default: () => "1" })
  indiEstado: number;

  @Column("float", { name: "INDI_VALOR", precision: 126 })
  indiValor: number;

  @Column("float", { name: "INDI_MITADVALOR", precision: 126 })
  indiMitadvalor: number;

  @Column("date", {
    name: "INDI_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  indiFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
