import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AugeEmpresas } from "./AugeEmpresas";

@Index("PK_AUCO_CERTCONTABILIDAD", ["contCont"], { unique: true })
@Index("UK_AUCO_CERTCONTABILIDAD", ["emprEmpr", "contAnno", "contMes"], {
  unique: true,
})
@Entity("AUCO_CERTCONTABILIDAD")
export class AucoCertcontabilidad {
  @Column("number", { primary: true, name: "CONT_CONT" })
  contCont: number;

  @Column("number", { name: "EMPR_EMPR", unique: true })
  emprEmpr: number;

  @Column("number", { name: "CONT_ANNO", unique: true })
  contAnno: number;

  @Column("number", { name: "CONT_MES", unique: true })
  contMes: number;

  @Column("float", {
    name: "CONT_CPE",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  contCpe: number | null;

  @Column("float", {
    name: "CONT_CP",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  contCp: number | null;

  @Column("float", {
    name: "CONT_CTMLX",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  contCtmlx: number | null;

  @Column("float", {
    name: "CONT_VA_CRT",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  contVaCrt: number | null;

  @Column("float", {
    name: "CONT_VA_CRTABC",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  contVaCrtabc: number | null;

  @Column("float", {
    name: "CONT_VA_CDF",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  contVaCdf: number | null;

  @Column("float", {
    name: "CONT_VA_CDFABC",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  contVaCdfabc: number | null;

  @Column("float", {
    name: "CONT_VA_CTL",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  contVaCtl: number | null;

  @Column("float", {
    name: "CONT_VA_CTLABC",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  contVaCtlabc: number | null;

  @Column("float", {
    name: "CONT_PRTG",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  contPrtg: number | null;

  @Column("date", {
    name: "CONT_FECHA",
    nullable: true,
    default: () => "sysdate",
  })
  contFecha: Date | null;

  @Column("number", { name: "USUA_USUA", nullable: true, default: () => "0" })
  usuaUsua: number | null;

  @ManyToOne(
    () => AugeEmpresas,
    (augeEmpresas) => augeEmpresas.aucoCertcontabilidads
  )
  @JoinColumn([{ name: "EMPR_EMPR", referencedColumnName: "emprEmpr" }])
  emprEmpr2: AugeEmpresas;
}
