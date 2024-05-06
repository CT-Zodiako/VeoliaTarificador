import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AucoClasesuso } from "./AucoClasesuso";

@Index(
  "IX_AUCO_CERTRESUCOMER_01",
  [
    "apsaId",
    "emprEmpr",
    "cercAnno",
    "cercMes",
    "clasClase",
    "faprCodigo",
    "paraTiptar20012",
    "paraTippred20013",
    "paraTipfac20014",
  ],
  {}
)
@Index("PK_AUCO_CERTRESUCOMER", ["cercId"], { unique: true })
@Entity("AUCO_CERTRESUCOMER")
export class AucoCertresucomer {
  @Column("number", { primary: true, name: "CERC_ID" })
  cercId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "CERC_ANNO" })
  cercAnno: number;

  @Column("number", { name: "CERC_MES" })
  cercMes: number;

  @Column("number", { name: "CLAS_CLASE" })
  clasClase: number;

  @Column("number", { name: "FAPR_CODIGO" })
  faprCodigo: number;

  @Column("number", { name: "PARA_TIPTAR20012" })
  paraTiptar20012: number;

  @Column("number", { name: "PARA_TIPPRED20013" })
  paraTippred20013: number;

  @Column("number", { name: "PARA_TIPFAC20014" })
  paraTipfac20014: number;

  @Column("float", {
    name: "CERC_CANTUSUARIOS",
    precision: 126,
    default: () => "0",
  })
  cercCantusuarios: number;

  @Column("float", { name: "CERC_MTS3", precision: 126, default: () => "0" })
  cercMts3: number;

  @Column("float", {
    name: "CERC_DENSIDAD",
    precision: 126,
    default: () => "0",
  })
  cercDensidad: number;

  @Column("float", {
    name: "CERC_TONELADAS",
    precision: 126,
    default: () => "0",
  })
  cercToneladas: number;

  @Column("date", {
    name: "CERC_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  cercFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", { name: "MULT_MULTI", default: () => "0" })
  multMulti: number;

  @ManyToOne(
    () => AucoClasesuso,
    (aucoClasesuso) => aucoClasesuso.aucoCertresucomers
  )
  @JoinColumn([{ name: "CLAS_CLASE", referencedColumnName: "clasClase" }])
  clasClase2: AucoClasesuso;
}
