import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_F23", ["APSA_ID", "EMPR_EMPR", "F23_ANNO", "F23_MES"], {
  unique: true,
})
@Entity("SUI_F23")
export class SuiF23 {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  APSA_ID: number;

  @Column("number", { primary: true, name: "EMPR_EMPR", scale: 0 })
  EMPR_EMPR: number;

  @Column("number", { primary: true, name: "F23_ANNO", scale: 0 })
  F23_ANNO: number;

  @Column("number", { primary: true, name: "F23_MES", scale: 0 })
  F23_MES: number;

  @Column("float", { name: "F23_ID", precision: 126, default: () => "0" })
  F23_ID: number;

  @Column("varchar2", { name: "F23_NUAP", length: 100, default: () => "'0'" })
  F23_NUAP: string;

  @Column("float", { name: "F23_N", precision: 126, default: () => "0" })
  F23_N: number;

  @Column("float", { name: "F23_CP", precision: 126, default: () => "0" })
  F23_CP: number;

  @Column("float", { name: "F23_CCC", precision: 126, default: () => "0" })
  F23_CCC: number;

  @Column("float", { name: "F23_M2CCJ", precision: 126, default: () => "0" })
  F23_M2CCJ: number;

  @Column("float", { name: "F23_CLAVJ", precision: 126, default: () => "0" })
  F23_CLAVJ: number;

  @Column("float", { name: "F23_M3AGUAJ", precision: 126, default: () => "0" })
  F23_M3AGUAJ: number;

  @Column("float", { name: "F23_M2LAVJ", precision: 126, default: () => "0" })
  F23_M2LAVJ: number;

  @Column("float", { name: "F23_CLPJ", precision: 126, default: () => "0" })
  F23_CLPJ: number;

  @Column("float", { name: "F23_KLPJ", precision: 126, default: () => "0" })
  F23_KLPJ: number;

  @Column("float", { name: "F23_CCEI", precision: 126, default: () => "0" })
  F23_CCEI: number;

  @Column("float", { name: "F23_TIJ", precision: 126, default: () => "0" })
  F23_TIJ: number;

  @Column("float", { name: "F23_CCEMJ", precision: 126, default: () => "0" })
  F23_CCEMJ: number;

  @Column("float", { name: "F23_TMJ", precision: 126, default: () => "0" })
  F23_TMJ: number;

  @Column("float", { name: "F23_CLUS", precision: 126, default: () => "0" })
  F23_CLUS: number;

  @Column("float", { name: "F23_CBLJ", precision: 126, default: () => "0" })
  F23_CBLJ: number;

  @Column("float", { name: "F23_LBLJ", precision: 126, default: () => "0" })
  F23_LBLJ: number;

  @Column("float", { name: "F23_CBLS", precision: 126, default: () => "0" })
  F23_CBLS: number;

  @Column("float", {
    name: "F23_FACBLCLUS",
    precision: 126,
    default: () => "0",
  })
  F23_FACBLCLUS: number;

  @Column("varchar2", { name: "F23_ABC", length: 2, default: () => "'NO'" })
  F23_ABC: string;

  @Column("date", { name: "F23_FECHA", default: () => "sysdate" })
  F23_FECHA: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  USUARIO: number;
}
