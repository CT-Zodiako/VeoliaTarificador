import { Column, Entity, Index, OneToMany, OneToOne } from "typeorm";
import { AucoApsrelleno } from "./AucoApsrelleno";
import { AucoCertcomercial } from "./AucoCertcomercial";
import { AucoCertrelleno } from "./AucoCertrelleno";

@Index("PK_AUCO_RELLENOS", ["rellId"], { unique: true })
@Entity("AUCO_RELLENOS")
export class AucoRellenos {
  @Column("number", { primary: true, name: "RELL_ID" })
  rellId: number;

  @Column("varchar2", { name: "RELL_NOMRELLENO", nullable: true, length: 20 })
  rellNomrelleno: string | null;

  @Column("clob", { name: "RELL_DESCRIPCION" })
  rellDescripcion: string;

  @Column("number", { name: "RELL_ESTADO", default: () => "1" })
  rellEstado: number;

  @Column("number", { name: "RELL_PROPIO", default: () => "1" })
  rellPropio: number;

  @Column("date", {
    name: "RELL_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  rellFechacreacion: Date | null;

  @Column("number", { name: "RELL_REGIONAL", default: () => "0" })
  rellRegional: number;

  @Column("number", { name: "USUA_USUA", default: () => "0" })
  usuaUsua: number;

  @Column("varchar2", { name: "RELL_NUSD", nullable: true, length: 30 })
  rellNusd: string | null;

  @OneToMany(() => AucoApsrelleno, (aucoApsrelleno) => aucoApsrelleno.rell)
  aucoApsrellenos: AucoApsrelleno[];

  @OneToMany(
    () => AucoCertcomercial,
    (aucoCertcomercial) => aucoCertcomercial.rell
  )
  aucoCertcomercials: AucoCertcomercial[];

  @OneToOne(
    () => AucoCertrelleno,
    (aucoCertrelleno) => aucoCertrelleno.rellRell2
  )
  aucoCertrelleno: AucoCertrelleno;
}
