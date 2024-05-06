import { Column, Entity } from "typeorm";

@Entity("CORRER_CERTADICIONAL")
export class CorrerCertadicional {
  @Column("number", { name: "CEAD_ID" })
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

  @Column("number", { name: "CEAD_ANNOSEMEST" })
  ceadAnnosemest: number;

  @Column("float", { name: "CEAD_CDF", precision: 126 })
  ceadCdf: number;

  @Column("float", { name: "CEAD_CTL", precision: 126 })
  ceadCtl: number;

  @Column("date", { name: "CEAD_FECHACREACION", nullable: true })
  ceadFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("float", { name: "CEAD_TON", precision: 126 })
  ceadTon: number;

  @Column("float", { name: "CEAD_VARIACION", precision: 126 })
  ceadVariacion: number;

  @Column("float", { name: "CEAD_CRT", nullable: true, precision: 126 })
  ceadCrt: number | null;

  @Column("float", { name: "CEAD_QRS", nullable: true, precision: 126 })
  ceadQrs: number | null;

  @Column("float", { name: "CEAD_QRT", nullable: true, precision: 126 })
  ceadQrt: number | null;

  @Column("float", { name: "CEAD_DINC", nullable: true, precision: 126 })
  ceadDinc: number | null;
}
