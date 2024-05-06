import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_REVF24", ["REVE_ID", "APSA_ID", "F24_ANNO", "F24_MES"], {
  unique: true,
})
@Entity("SUI_REVF24")
export class SuiRevf24 {
  @Column("number", { primary: true, name: "REVE_ID", scale: 0 })
  REVE_ID: number;

  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  APSA_ID: number;

  @Column("number", { primary: true, name: "F24_ANNO", scale: 0 })
  F24_ANNO: number;

  @Column("number", { primary: true, name: "F24_MES", scale: 0 })
  F24_MES: number;

  @Column("varchar2", { name: "F24_NUAP", length: 100, default: () => "'0'" })
  F24_NUAP: string;

  @Column("varchar2", { name: "F24_NUSD", length: 100, default: () => "'0'" })
  F24_NUSD: string;

  @Column("float", {
    name: "F24_CENTROIDE",
    precision: 126,
    default: () => "0",
  })
  F24_CENTROIDE: number;

  @Column("float", { name: "F24_QRT", precision: 126, default: () => "0" })
  F24_QRT: number;

  @Column("float", { name: "F24_F1", precision: 126, default: () => "0" })
  F24_F1: number;

  @Column("float", { name: "F24_F2", precision: 126, default: () => "0" })
  F24_F2: number;

  @Column("float", { name: "F24_CPE", precision: 126, default: () => "0" })
  F24_CPE: number;

  @Column("float", { name: "F24_PRTZ", precision: 126, default: () => "0" })
  F24_PRTZ: number;

  @Column("float", { name: "F24_DET", nullable: true, precision: 126 })
  F24_DET: number | null;

  @Column("float", { name: "F24_F1ET", nullable: true, precision: 126 })
  F24_F1ET: number | null;

  @Column("float", { name: "F24_CPEET", nullable: true, precision: 126 })
  F24_CPEET: number | null;

  @Column("float", { name: "F24_PRTZET", nullable: true, precision: 126 })
  F24_PRTZET: number | null;

  @Column("float", { name: "F24_CEG", nullable: true, precision: 126 })
  F24_CEG: number | null;

  @Column("float", { name: "F24_CRTP", precision: 126, default: () => "0" })
  F24_CRTP: number;

  @Column("float", {
    name: "F24_SALINIDAD",
    precision: 126,
    default: () => "0",
  })
  F24_SALINIDAD: number;

  @Column("float", { name: "F24_VACRTABC", precision: 126, default: () => "0" })
  F24_VACRTABC: number;

  @Column("float", { name: "F24_VACRT", precision: 126, default: () => "0" })
  F24_VACRT: number;

  @Column("float", { name: "F24_FCK", precision: 126, default: () => "0" })
  F24_FCK: number;

  @Column("float", { name: "F24_T", precision: 126, default: () => "0" })
  F24_T: number;

  @Column("float", { name: "F24_CRTZ", precision: 126, default: () => "0" })
  F24_CRTZ: number;

  @Column("float", { name: "F24_CRT", precision: 126, default: () => "0" })
  F24_CRT: number;

  @Column("float", { name: "F24_FACRT", precision: 126, default: () => "0" })
  F24_FACRT: number;

  @Column("float", { name: "F24_FACCS", precision: 126, default: () => "0" })
  F24_FACCS: number;

  @Column("date", { name: "F24_FECHA", default: () => "sysdate" })
  F24_FECHA: Date;

  @Column("number", { name: "USUARIO", scale: 0, default: () => "0" })
  USUARIO: number;
}
