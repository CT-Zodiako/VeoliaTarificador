import { Column, Entity, Index } from "typeorm";

@Index("PKFAC_PRODUCCION", ["faprCodigo", "apsaId"], { unique: true })
@Entity("AUCO_FACTPRODUCCION")
export class AucoFactproduccion {
  @Column("char", { name: "FAPR_RANGO", length: 10, default: () => "' '" })
  faprRango: string;

  @Column("number", { primary: true, name: "FAPR_CODIGO" })
  faprCodigo: number;

  @Column("char", { name: "FAPR_NOMBRE", nullable: true, length: 30 })
  faprNombre: string | null;

  @Column("char", { name: "FAPR_DESCRIPCION", nullable: true, length: 300 })
  faprDescripcion: string | null;

  @Column("float", { name: "FAPR_VALOR", nullable: true, precision: 126 })
  faprValor: number | null;

  @Column("date", {
    name: "FAPR_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  faprFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;
}
