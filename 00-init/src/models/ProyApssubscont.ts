import { Column, Entity, Index } from "typeorm";

@Index(
  "IX_PROY_APSSUBSCONT_01",
  ["proyId", "apsaId", "clasClase", "sucoAnno", "sucoMes"],
  {}
)
@Index("PK_PROY_APSSUBSCONT", ["sucoId"], { unique: true })
@Entity("PROY_APSSUBSCONT")
export class ProyApssubscont {
  @Column("number", { primary: true, name: "SUCO_ID" })
  sucoId: number;

  @Column("number", { name: "PROY_ID" })
  proyId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "CLAS_CLASE" })
  clasClase: number;

  @Column("number", { name: "SUCO_ANNO" })
  sucoAnno: number;

  @Column("number", { name: "SUCO_MES" })
  sucoMes: number;

  @Column("float", { name: "SUCO_VALOR", precision: 126, default: () => "0" })
  sucoValor: number;

  @Column("number", { name: "SUCO_ESTADO", default: () => "1" })
  sucoEstado: number;

  @Column("date", {
    name: "SUCO_FECHA",
    nullable: true,
    default: () => "sysdate",
  })
  sucoFecha: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
