import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AugeEmpresas } from "./AugeEmpresas";

@Index(
  "IXPROY_INFOADICIONAL01",
  ["proyId", "apsaId", "emprEmpr", "diviDivi", "rellId", "ceadAnno", "ceadMes"],
  { unique: true }
)
@Index("PK_PROY_INFOADICIONAL", ["ceadId", "proyId"], { unique: true })
@Entity("PROY_INFOADICIONAL")
export class ProyInfoadicional {
  @Column("number", { primary: true, name: "CEAD_ID" })
  ceadId: number;

  @Column("number", { primary: true, name: "PROY_ID" })
  proyId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "RELL_ID" })
  rellId: number;

  @Column("number", { name: "CEAD_ANNO" })
  ceadAnno: number;

  @Column("number", { name: "CEAD_MES" })
  ceadMes: number;

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

  @ManyToOne(
    () => AugeEmpresas,
    (augeEmpresas) => augeEmpresas.proyInfoadicionals
  )
  @JoinColumn([{ name: "EMPR_EMPR", referencedColumnName: "emprEmpr" }])
  emprEmpr2: AugeEmpresas;
}
