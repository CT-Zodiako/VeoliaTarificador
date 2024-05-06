import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_AUCO_AFORADOSAPSRURAL",
  [
    "iaedId",
    "clasClase",
    "faprCodigo",
    "paraTiptar20012",
    "paraTippred20013",
    "paraTipfac20014",
    "aforToneladas",
    "multMulti",
  ],
  { unique: true }
)
@Entity("AUCO_AFORADOSAPSRURAL")
export class AucoAforadosapsrural {
  @Column("number", { primary: true, name: "IAED_ID" })
  iaedId: number;

  @Column("number", { primary: true, name: "CLAS_CLASE" })
  clasClase: number;

  @Column("number", { primary: true, name: "FAPR_CODIGO" })
  faprCodigo: number;

  @Column("number", { primary: true, name: "PARA_TIPTAR20012" })
  paraTiptar20012: number;

  @Column("number", { primary: true, name: "PARA_TIPPRED20013" })
  paraTippred20013: number;

  @Column("number", { primary: true, name: "PARA_TIPFAC20014" })
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
    primary: true,
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

  @Column("number", { primary: true, name: "MULT_MULTI", default: () => "0" })
  multMulti: number;

  @Column("number", { name: "LOCA_ID", nullable: true, default: () => "0" })
  locaId: number | null;
}
