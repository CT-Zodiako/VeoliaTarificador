import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AugeEmpresas } from "./AugeEmpresas";

@Index("PK_AUCO_CERTAPOROVECHAMIENTO", ["aproId"], { unique: true })
@Index("UK_AUCO_CERTAPOROVECHAMIENTO", ["emprEmpr", "aproAnno", "aproMes"], {
  unique: true,
})
@Entity("AUCO_CERTAPROVECHAMIENTO")
export class AucoCertaprovechamiento {
  @Column("number", { primary: true, name: "APRO_ID" })
  aproId: number;

  @Column("number", { name: "EMPR_EMPR", unique: true })
  emprEmpr: number;

  @Column("number", { name: "APRO_ANNO", unique: true })
  aproAnno: number;

  @Column("number", { name: "APRO_MES", unique: true })
  aproMes: number;

  @Column("float", {
    name: "APRO_QA",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  aproQa: number | null;

  @Column("float", {
    name: "APRO_QR",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  aproQr: number | null;

  @Column("float", {
    name: "APRO_NA",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  aproNa: number | null;

  @Column("float", {
    name: "APRO_TAFA",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  aproTafa: number | null;

  @Column("number", { name: "APRO_ESTADO", nullable: true, default: () => "0" })
  aproEstado: number | null;

  @Column("date", {
    name: "APRO_FECHA",
    nullable: true,
    default: () => "sysdate",
  })
  aproFecha: Date | null;

  @Column("number", { name: "USUA_USUA", nullable: true, default: () => "0" })
  usuaUsua: number | null;

  @ManyToOne(
    () => AugeEmpresas,
    (augeEmpresas) => augeEmpresas.aucoCertaprovechamientos
  )
  @JoinColumn([{ name: "EMPR_EMPR", referencedColumnName: "emprEmpr" }])
  emprEmpr2: AugeEmpresas;
}
