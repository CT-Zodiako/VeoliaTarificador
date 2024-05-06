import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AucoApsaseo } from "./AucoApsaseo";
import { AugeDivipoli } from "./AugeDivipoli";
import { AugeEmpresas } from "./AugeEmpresas";
import { AucoRellenos } from "./AucoRellenos";

@Index(
  "IX_AUCO_CERTCOMERCIAL_01",
  ["emprEmpr", "diviDivi", "apsaId", "rellId", "cecoAnno", "cecoMes"],
  {}
)
@Index("PK_AUCO_CERTCOMERCIAL", ["cecoId"], { unique: true })
@Entity("AUCO_CERTCOMERCIAL")
export class AucoCertcomercial {
  @Column("number", { primary: true, name: "CECO_ID" })
  cecoId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "RELL_ID" })
  rellId: number;

  @Column("number", { name: "CECO_ANNO" })
  cecoAnno: number;

  @Column("number", { name: "CECO_MES" })
  cecoMes: number;

  @Column("number", { name: "CECO_ANNOSEMEST", default: () => "0" })
  cecoAnnosemest: number;

  @Column("float", { name: "CECO_N", precision: 126, default: () => "0" })
  cecoN: number;

  @Column("float", { name: "CECO_ND", precision: 126, default: () => "0" })
  cecoNd: number;

  @Column("float", { name: "CECO_NAUZ", precision: 126, default: () => "0" })
  cecoNauz: number;

  @Column("float", { name: "CECO_NA", precision: 126, default: () => "0" })
  cecoNa: number;

  @Column("float", { name: "CECO_TAFA", precision: 126, default: () => "0" })
  cecoTafa: number;

  @Column("float", { name: "CECO_TAFNA", precision: 126, default: () => "0" })
  cecoTafna: number;

  @Column("float", { name: "CECO_M3AGUA", precision: 126, default: () => "0" })
  cecoM3Agua: number;

  @Column("number", { name: "CECO_ESTADOCERTIF", default: () => "0" })
  cecoEstadocertif: number;

  @Column("date", {
    name: "CECO_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  cecoFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @ManyToOne(() => AucoApsaseo, (aucoApsaseo) => aucoApsaseo.aucoCertcomercials)
  @JoinColumn([{ name: "APSA_ID", referencedColumnName: "apsaId" }])
  apsa: AucoApsaseo;

  @ManyToOne(
    () => AugeDivipoli,
    (augeDivipoli) => augeDivipoli.aucoCertcomercials
  )
  @JoinColumn([{ name: "DIVI_DIVI", referencedColumnName: "diviDivi" }])
  diviDivi2: AugeDivipoli;

  @ManyToOne(
    () => AugeEmpresas,
    (augeEmpresas) => augeEmpresas.aucoCertcomercials
  )
  @JoinColumn([{ name: "EMPR_EMPR", referencedColumnName: "emprEmpr" }])
  emprEmpr2: AugeEmpresas;

  @ManyToOne(
    () => AucoRellenos,
    (aucoRellenos) => aucoRellenos.aucoCertcomercials
  )
  @JoinColumn([{ name: "RELL_ID", referencedColumnName: "rellId" }])
  rell: AucoRellenos;
}
