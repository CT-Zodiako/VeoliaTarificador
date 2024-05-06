import { Column, Entity, Index } from "typeorm";

@Index(
  "IX_AUCO_APSSUBSCONT_01",
  [
    "apsaId",
    "emprEmpr",
    "diviDivi",
    "clasClase",
    "sucoAnno",
    "sucoMes",
    "paraTippred20016",
  ],
  {}
)
@Index("PK_AUCO_APSSUBSCONT", ["sucoId"], { unique: true })
@Entity("AUCO_APSSUBSCONT")
export class AucoApssubscont {
  @Column("number", { primary: true, name: "SUCO_ID" })
  sucoId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "CLAS_CLASE" })
  clasClase: number;

  @Column("number", { name: "SUCO_ANNO" })
  sucoAnno: number;

  @Column("number", { name: "SUCO_MES" })
  sucoMes: number;

  @Column("number", { name: "PARA_TIPPRED20016", scale: 0 })
  paraTippred20016: number;

  @Column("float", { name: "SUCO_VALOR", precision: 126, default: () => "0" })
  sucoValor: number;

  @Column("number", { name: "SUCO_ESTADO", default: () => "1" })
  sucoEstado: number;

  @Column("date", {
    name: "SUCO_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  sucoFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
