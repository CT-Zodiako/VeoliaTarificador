import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AugeEmpresas } from "./AugeEmpresas";

@Index("PK_CERTCOMPETIDOR", ["compId"], { unique: true })
@Index("UK_CERTCOMPETIDOR", ["emprEmpr", "compAnno", "compMes"], {
  unique: true,
})
@Entity("AUCO_CERTCOMPETIDOR")
export class AucoCertcompetidor {
  @Column("number", { primary: true, name: "COMP_ID" })
  compId: number;

  @Column("number", { name: "EMPR_EMPR", unique: true })
  emprEmpr: number;

  @Column("number", { name: "COMP_ANNO", unique: true })
  compAnno: number;

  @Column("number", { name: "COMP_MES", unique: true })
  compMes: number;

  @Column("float", {
    name: "COMP_N",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compN: number | null;

  @Column("float", {
    name: "COMP_ND",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compNd: number | null;

  @Column("float", {
    name: "COMP_CP",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compCp: number | null;

  @Column("float", {
    name: "COMP_LBLJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compLblj: number | null;

  @Column("float", {
    name: "COMP_TBL",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compTbl: number | null;

  @Column("float", {
    name: "COMP_TLU",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compTlu: number | null;

  @Column("float", {
    name: "COMP_M2CCJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compM2Ccj: number | null;

  @Column("float", {
    name: "COMP_M2LAVJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compM2Lavj: number | null;

  @Column("float", {
    name: "COMP_MTR3AGUA",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compMtr3Agua: number | null;

  @Column("float", {
    name: "COMP_TIJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compTij: number | null;

  @Column("float", {
    name: "COMP_KLPJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compKlpj: number | null;

  @Column("float", {
    name: "COMP_TMJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compTmj: number | null;

  @Column("float", {
    name: "COMP_QR",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compQr: number | null;

  @Column("float", {
    name: "COMP_QA",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compQa: number | null;

  @Column("float", {
    name: "COMP_CRT",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compCrt: number | null;

  @Column("float", {
    name: "COMP_CDF",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compCdf: number | null;

  @Column("float", {
    name: "COMP_QRS",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compQrs: number | null;

  @Column("float", {
    name: "COMP_QRT",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  compQrt: number | null;

  @Column("date", {
    name: "COMP_FECHA",
    nullable: true,
    default: () => "sysdate",
  })
  compFecha: Date | null;

  @Column("number", { name: "USUA_USUA", nullable: true, default: () => "0" })
  usuaUsua: number | null;

  @ManyToOne(
    () => AugeEmpresas,
    (augeEmpresas) => augeEmpresas.aucoCertcompetidors
  )
  @JoinColumn([{ name: "EMPR_EMPR", referencedColumnName: "emprEmpr" }])
  emprEmpr2: AugeEmpresas;
}
