import { Column, Entity, Index } from "typeorm";

@Index(
  "IXAUCO_INFOAPSEMPRDIVI01",
  ["apsaId", "emprEmpr", "diviDivi", "iaedAnno", "iaedMes"],
  { unique: true }
)
@Index("PK_AUCO_INFOAPSEMPRDIVI", ["iaedId"], { unique: true })
@Entity("AUCO_INFOAPSEMPRDIVI")
export class AucoInfoapsemprdivi {
  @Column("number", { primary: true, name: "IAED_ID" })
  iaedId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "IAED_ANNO" })
  iaedAnno: number;

  @Column("number", { name: "IAED_MES" })
  iaedMes: number;

  @Column("float", { name: "IAED_QRTZ", precision: 126 })
  iaedQrtz: number;

  @Column("float", { name: "IAED_CPE", precision: 126 })
  iaedCpe: number;

  @Column("float", { name: "IAED_T", precision: 126 })
  iaedT: number;

  @Column("float", {
    name: "IAED_VACRTABC",
    precision: 126,
    default: () => "0",
  })
  iaedVacrtabc: number;

  @Column("float", { name: "IAED_VACRT", precision: 126, default: () => "0" })
  iaedVacrt: number;

  @Column("float", {
    name: "IAED_CRTZ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  iaedCrtz: number | null;

  @Column("float", { name: "IAED_QBL", precision: 126, default: () => "0" })
  iaedQbl: number;

  @Column("float", { name: "IAED_QLU", precision: 126, default: () => "0" })
  iaedQlu: number;

  @Column("float", { name: "IAED_QR", precision: 126, default: () => "0" })
  iaedQr: number;

  @Column("float", { name: "IAED_TAFA", precision: 126, default: () => "0" })
  iaedTafa: number;

  @Column("float", { name: "IAED_ND", precision: 126, default: () => "0" })
  iaedNd: number;

  @Column("float", { name: "IAED_NA", precision: 126, default: () => "0" })
  iaedNa: number;

  @Column("float", { name: "IAED_QNA", precision: 126, default: () => "0" })
  iaedQna: number;

  @Column("float", { name: "IAED_TAFNA", precision: 126, default: () => "0" })
  iaedTafna: number;

  @Column("float", { name: "IAED_QA", precision: 126, default: () => "0" })
  iaedQa: number;

  @Column("date", {
    name: "IAED_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  iaedFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA", default: () => "0" })
  usuaUsua: number;

  @Column("number", { name: "IAED_APROVECHA", default: () => "0" })
  iaedAprovecha: number;

  @Column("float", {
    name: "IAED_QALMACEN",
    precision: 126,
    default: () => "0",
  })
  iaedQalmacen: number;

  @Column("float", { name: "IAED_CPEET", nullable: true, precision: 126 })
  iaedCpeet: number | null;

  @Column("float", { name: "IAED_QRTET", nullable: true, precision: 126 })
  iaedQrtet: number | null;

  @Column("float", { name: "IAED_CRTCOMP", nullable: true, precision: 126 })
  iaedCrtcomp: number | null;

  @Column("float", { name: "IAED_CDFCOMP", nullable: true, precision: 126 })
  iaedCdfcomp: number | null;

  @Column("float", { name: "IAED_QRSCOMP", nullable: true, precision: 126 })
  iaedQrscomp: number | null;

  @Column("float", { name: "IAED_NAA", nullable: true, precision: 126 })
  iaedNaa: number | null;

  @Column("float", { name: "IAED_NDA", nullable: true, precision: 126 })
  iaedNda: number | null;
}
