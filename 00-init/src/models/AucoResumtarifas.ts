import { Column, Entity, Index } from "typeorm";

@Index("PK_TAR_RESUMTARIFAS", ["retaId"], { unique: true })
@Entity("AUCO_RESUMTARIFAS")
export class AucoResumtarifas {
  @Column("number", { primary: true, name: "RETA_ID" })
  retaId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "RELL_ID" })
  rellId: number;

  @Column("number", { name: "RETA_ANNO" })
  retaAnno: number;

  @Column("number", { name: "RETA_MES" })
  retaMes: number;

  @Column("number", { name: "RETA_ANNOSEMEST", default: () => "0" })
  retaAnnosemest: number;

  @Column("number", { name: "PARA_GRUPRESUM20017", default: () => "0" })
  paraGrupresum20017: number;

  @Column("varchar2", { name: "RETA_VARIABLE", length: 50 })
  retaVariable: string;

  @Column("float", {
    name: "RETA_VALORMES",
    precision: 126,
    default: () => "0",
  })
  retaValormes: number;

  @Column("float", {
    name: "RETA_VALORPROM",
    precision: 126,
    default: () => "0",
  })
  retaValorprom: number;

  @Column("number", { name: "RETA_ESTADO", default: () => "0" })
  retaEstado: number;

  @Column("date", {
    name: "CECO_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  cecoFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
