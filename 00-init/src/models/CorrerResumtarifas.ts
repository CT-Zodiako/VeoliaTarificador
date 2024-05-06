import { Column, Entity } from "typeorm";

@Entity("CORRER_RESUMTARIFAS")
export class CorrerResumtarifas {
  @Column("number", { name: "RETA_ID" })
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

  @Column("number", { name: "RETA_ANNOSEMEST" })
  retaAnnosemest: number;

  @Column("number", { name: "PARA_GRUPRESUM20017" })
  paraGrupresum20017: number;

  @Column("varchar2", { name: "RETA_VARIABLE", length: 50 })
  retaVariable: string;

  @Column("float", { name: "RETA_VALORMES", precision: 126 })
  retaValormes: number;

  @Column("float", { name: "RETA_VALORPROM", precision: 126 })
  retaValorprom: number;

  @Column("number", { name: "RETA_ESTADO" })
  retaEstado: number;

  @Column("date", { name: "CECO_FECHACREACION", nullable: true })
  cecoFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
