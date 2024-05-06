import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AucoClasesuso } from "./AucoClasesuso";

@Index("PK_TAR_AFORADOSAPS", ["iaedId"], { unique: true })
@Entity("AUCO_AFORADOSAPS")
export class AucoAforadosaps {
  @Column("number", { primary: true, name: "IAED_ID" })
  iaedId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "AFOR_ANNO" })
  aforAnno: number;

  @Column("number", { name: "AFOR_MES" })
  aforMes: number;

  @Column("number", { name: "FAPR_CODIGO" })
  faprCodigo: number;

  @Column("number", { name: "PARA_TIPTAR20012" })
  paraTiptar20012: number;

  @Column("number", { name: "PARA_TIPPRED20013" })
  paraTippred20013: number;

  @Column("number", { name: "PARA_TIPFAC20014" })
  paraTipfac20014: number;

  @Column("float", {
    name: "AFOR_CANTUSUARIOS",
    precision: 126,
    default: () => "0",
  })
  aforCantusuarios: number;

  @Column("float", { name: "AFOR_MTS3", precision: 126, default: () => "0" })
  aforMts3: number;

  @Column("float", {
    name: "AFOR_DENSIDAD",
    precision: 126,
    default: () => "0",
  })
  aforDensidad: number;

  @Column("float", {
    name: "AFOR_TONELADAS",
    precision: 126,
    default: () => "0",
  })
  aforToneladas: number;

  @Column("date", {
    name: "AFOR_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  aforFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", { name: "MULT_MULTI", default: () => "0" })
  multMulti: number;

  @ManyToOne(
    () => AucoClasesuso,
    (aucoClasesuso) => aucoClasesuso.aucoAforadosaps
  )
  @JoinColumn([{ name: "CLAS_CLASE", referencedColumnName: "clasClase" }])
  clasClase: AucoClasesuso;
}
