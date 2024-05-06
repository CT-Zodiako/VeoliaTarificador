import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AugeEmpresas } from "./AugeEmpresas";

@Index(
  "IXAUCO_CERTADICIONAL01",
  ["emprEmpr", "diviDivi", "apsaId", "rellId", "ceadAnno", "ceadMes"],
  { unique: true }
)
@Index("PK_TAR_CERTADICIONAL", ["ceadId"], { unique: true })
@Entity("AUCO_CERTADICIONAL")
export class AucoCertadicional {
  @Column("number", { primary: true, name: "CEAD_ID" })
  ceadId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "RELL_ID" })
  rellId: number;

  @Column("number", { name: "CEAD_ANNO" })
  ceadAnno: number;

  @Column("number", { name: "CEAD_MES" })
  ceadMes: number;

  @Column("number", { name: "CEAD_ANNOSEMEST", default: () => "0" })
  ceadAnnosemest: number;

  @Column("float", { name: "CEAD_CDF", precision: 126, default: () => "0" })
  ceadCdf: number;

  @Column("float", { name: "CEAD_CTL", precision: 126, default: () => "0" })
  ceadCtl: number;

  @Column("date", {
    name: "CEAD_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  ceadFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("float", { name: "CEAD_TON", precision: 126, default: () => "0" })
  ceadTon: number;

  @Column("float", {
    name: "CEAD_VARIACION",
    precision: 126,
    default: () => "0",
  })
  ceadVariacion: number;

  @Column("float", {
    name: "CEAD_CRT",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  ceadCrt: number | null;

  @Column("float", {
    name: "CEAD_QRS",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  ceadQrs: number | null;

  @Column("float", {
    name: "CEAD_QRT",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  ceadQrt: number | null;

  @Column("float", {
    name: "CEAD_DINC",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  ceadDinc: number | null;

  @ManyToOne(
    () => AugeEmpresas,
    (augeEmpresas) => augeEmpresas.aucoCertadicionals
  )
  @JoinColumn([{ name: "EMPR_EMPR", referencedColumnName: "emprEmpr" }])
  emprEmpr2: AugeEmpresas;
}
