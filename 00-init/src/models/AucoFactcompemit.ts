import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_AUCO_FACTCOMPEMIT",
  [
    "apsaId",
    "diviDivi",
    "emprEmpr",
    "facoAnno",
    "facoMes",
    "clasClase",
    "paraTiptar20012",
    "paraTipfac20014",
    "paraUbicacion20016",
    "multMulti",
    "facoPorcsubcon",
    "facoPorctbl",
    "facoPorctrt",
    "facoPorctdf",
    "facoPorctc",
    "facoPorcta",
    "facoPorcttl",
    "facoPorctlu",
  ],
  { unique: true }
)
@Entity("AUCO_FACTCOMPEMIT")
export class AucoFactcompemit {
  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { primary: true, name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "EMPR_HOMOLOGACION" })
  emprHomologacion: number;

  @Column("number", { primary: true, name: "FACO_ANNO" })
  facoAnno: number;

  @Column("number", { primary: true, name: "FACO_MES" })
  facoMes: number;

  @Column("number", { primary: true, name: "CLAS_CLASE" })
  clasClase: number;

  @Column("number", { primary: true, name: "PARA_TIPTAR20012" })
  paraTiptar20012: number;

  @Column("number", { primary: true, name: "PARA_TIPFAC20014" })
  paraTipfac20014: number;

  @Column("number", { primary: true, name: "PARA_UBICACION20016" })
  paraUbicacion20016: number;

  @Column("number", { primary: true, name: "MULT_MULTI" })
  multMulti: number;

  @Column("number", {
    primary: true,
    name: "FACO_PORCSUBCON",
    precision: 9,
    scale: 6,
  })
  facoPorcsubcon: number;

  @Column("float", { name: "FACO_TARIFAPLENA", nullable: true, precision: 126 })
  facoTarifaplena: number | null;

  @Column("float", {
    name: "FACO_TARIFAAPLICAR",
    nullable: true,
    precision: 126,
  })
  facoTarifaaplicar: number | null;

  @Column("float", { name: "FACO_SUBCON", nullable: true, precision: 126 })
  facoSubcon: number | null;

  @Column("float", {
    name: "FACO_OTROCONCEPTOS",
    nullable: true,
    precision: 126,
  })
  facoOtroconceptos: number | null;

  @Column("float", { name: "FACO_TOTALFACT", nullable: true, precision: 126 })
  facoTotalfact: number | null;

  @Column("float", { name: "FACO_TBL", nullable: true, precision: 126 })
  facoTbl: number | null;

  @Column("float", { name: "FACO_TRT", nullable: true, precision: 126 })
  facoTrt: number | null;

  @Column("float", { name: "FACO_TDF", nullable: true, precision: 126 })
  facoTdf: number | null;

  @Column("float", { name: "FACO_TC", nullable: true, precision: 126 })
  facoTc: number | null;

  @Column("float", { name: "FACO_TA", nullable: true, precision: 126 })
  facoTa: number | null;

  @Column("float", { name: "FACO_TTL", nullable: true, precision: 126 })
  facoTtl: number | null;

  @Column("float", { name: "FACO_TLU", nullable: true, precision: 126 })
  facoTlu: number | null;

  @Column("float", { primary: true, name: "FACO_PORCTBL", precision: 126 })
  facoPorctbl: number;

  @Column("float", { primary: true, name: "FACO_PORCTRT", precision: 126 })
  facoPorctrt: number;

  @Column("float", { primary: true, name: "FACO_PORCTDF", precision: 126 })
  facoPorctdf: number;

  @Column("float", { primary: true, name: "FACO_PORCTC", precision: 126 })
  facoPorctc: number;

  @Column("float", { primary: true, name: "FACO_PORCTA", precision: 126 })
  facoPorcta: number;

  @Column("float", { primary: true, name: "FACO_PORCTTL", precision: 126 })
  facoPorcttl: number;

  @Column("float", { primary: true, name: "FACO_PORCTLU", precision: 126 })
  facoPorctlu: number;

  @Column("float", {
    name: "FACO_CP",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoCp: number | null;

  @Column("float", {
    name: "FACO_CCC",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoCcc: number | null;

  @Column("float", {
    name: "FACO_CLAVJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoClavj: number | null;

  @Column("float", {
    name: "FACO_CLP",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoClp: number | null;

  @Column("float", {
    name: "FACO_CCEI",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoCcei: number | null;

  @Column("float", {
    name: "FACO_CCEM",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoCcem: number | null;

  @Column("float", {
    name: "FACO_PROCCP",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoProccp: number | null;

  @Column("float", {
    name: "FACO_PROCCCC",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoProcccc: number | null;

  @Column("float", {
    name: "FACO_PROCCLAVJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoProcclavj: number | null;

  @Column("float", {
    name: "FACO_PROCCLP",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoProcclp: number | null;

  @Column("float", {
    name: "FACO_PROCCCEI",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoProcccei: number | null;

  @Column("float", {
    name: "FACO_PROCCCEM",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  facoProcccem: number | null;
}
