import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_REVF23", ["reveId", "apsaId", "emprEmpr", "f23Anno", "f23Mes"], {
  unique: true,
})
@Entity("SUI_REVF23")
export class SuiRevf23 {
  @Column("number", { primary: true, name: "REVE_ID", scale: 0 })
  reveId: number;

  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "EMPR_EMPR", scale: 0 })
  emprEmpr: number;

  @Column("number", { primary: true, name: "F23_ANNO", scale: 0 })
  f23Anno: number;

  @Column("number", { primary: true, name: "F23_MES", scale: 0 })
  f23Mes: number;

  @Column("float", { name: "F23_ID", precision: 126, default: () => "0" })
  f23Id: number;

  @Column("varchar2", { name: "F23_NUAP", length: 100, default: () => "'0'" })
  f23Nuap: string;

  @Column("float", { name: "F23_N", precision: 126, default: () => "0" })
  f23N: number;

  @Column("float", { name: "F23_CP", precision: 126, default: () => "0" })
  f23Cp: number;

  @Column("float", { name: "F23_CCC", precision: 126, default: () => "0" })
  f23Ccc: number;

  @Column("float", { name: "F23_M2CCJ", precision: 126, default: () => "0" })
  f23M2Ccj: number;

  @Column("float", { name: "F23_CLAVJ", precision: 126, default: () => "0" })
  f23Clavj: number;

  @Column("float", { name: "F23_M3AGUAJ", precision: 126, default: () => "0" })
  f23M3Aguaj: number;

  @Column("float", { name: "F23_M2LAVJ", precision: 126, default: () => "0" })
  f23M2Lavj: number;

  @Column("float", { name: "F23_CLPJ", precision: 126, default: () => "0" })
  f23Clpj: number;

  @Column("float", { name: "F23_KLPJ", precision: 126, default: () => "0" })
  f23Klpj: number;

  @Column("float", { name: "F23_CCEI", precision: 126, default: () => "0" })
  f23Ccei: number;

  @Column("float", { name: "F23_TIJ", precision: 126, default: () => "0" })
  f23Tij: number;

  @Column("float", { name: "F23_CCEMJ", precision: 126, default: () => "0" })
  f23Ccemj: number;

  @Column("float", { name: "F23_TMJ", precision: 126, default: () => "0" })
  f23Tmj: number;

  @Column("float", { name: "F23_CLUS", precision: 126, default: () => "0" })
  f23Clus: number;

  @Column("float", { name: "F23_CBLJ", precision: 126, default: () => "0" })
  f23Cblj: number;

  @Column("float", { name: "F23_LBLJ", precision: 126, default: () => "0" })
  f23Lblj: number;

  @Column("float", { name: "F23_CBLS", precision: 126, default: () => "0" })
  f23Cbls: number;

  @Column("float", {
    name: "F23_FACBLCLUS",
    precision: 126,
    default: () => "0",
  })
  f23Facblclus: number;

  @Column("varchar2", { name: "F23_ABC", length: 2, default: () => "'NO'" })
  f23Abc: string;

  @Column("date", { name: "F23_FECHA", default: () => "sysdate" })
  f23Fecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
