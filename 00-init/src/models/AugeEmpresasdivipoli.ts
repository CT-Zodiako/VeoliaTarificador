import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AugeDivipoli } from "./AugeDivipoli";
import { AugeEmpresas } from "./AugeEmpresas";

@Index("PK_AUGE_EMPRESASDIVIPOLI", ["emprEmpr", "diviDivi"], { unique: true })
@Entity("AUGE_EMPRESASDIVIPOLI")
export class AugeEmpresasdivipoli {
  @Column("number", { primary: true, name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { primary: true, name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "EMDI_ESTADO", default: () => "1" })
  emdiEstado: number;

  @Column("varchar2", { name: "EMDI_DIRECCION", nullable: true, length: 50 })
  emdiDireccion: string | null;

  @Column("varchar2", { name: "EMDI_TELEFONO", nullable: true, length: 30 })
  emdiTelefono: string | null;

  @Column("varchar2", { name: "EMDI_MAIL", nullable: true, length: 50 })
  emdiMail: string | null;

  @Column("varchar2", { name: "EMDI_NIT", nullable: true, length: 20 })
  emdiNit: string | null;

  @Column("date", {
    name: "EMDI_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  emdiFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", { name: "EMDI_SUSATEND", default: () => "1" })
  emdiSusatend: number;

  @Column("number", { name: "EMDI_APROVECHAMIENTO", default: () => "0" })
  emdiAprovechamiento: number;

  @Column("number", { name: "PARA_TIPOFACTURACION20008", default: () => "2" })
  paraTipofacturacion20008: number;

  @Column("number", {
    name: "PARA_TIPOFACTADD20008",
    nullable: true,
    default: () => "0",
  })
  paraTipofactadd20008: number | null;

  @ManyToOne(
    () => AugeDivipoli,
    (augeDivipoli) => augeDivipoli.augeEmpresasdivipolis
  )
  @JoinColumn([{ name: "DIVI_DIVI", referencedColumnName: "diviDivi" }])
  diviDivi2: AugeDivipoli;

  @ManyToOne(
    () => AugeEmpresas,
    (augeEmpresas) => augeEmpresas.augeEmpresasdivipolis
  )
  @JoinColumn([{ name: "EMPR_EMPR", referencedColumnName: "emprEmpr" }])
  emprEmpr2: AugeEmpresas;
}
