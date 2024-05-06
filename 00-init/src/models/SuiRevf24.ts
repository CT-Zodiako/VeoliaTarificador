import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_REVF24", ["reveId", "apsaId", "f24Anno", "f24Mes"], {
  unique: true,
})
@Entity("SUI_REVF24")
export class SuiRevf24 {
  @Column("number", { primary: true, name: "REVE_ID", scale: 0 })
  reveId: number;

  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "F24_ANNO", scale: 0 })
  f24Anno: number;

  @Column("number", { primary: true, name: "F24_MES", scale: 0 })
  f24Mes: number;

  @Column("varchar2", { name: "F24_NUAP", length: 100, default: () => "'0'" })
  f24Nuap: string;

  @Column("varchar2", { name: "F24_NUSD", length: 100, default: () => "'0'" })
  f24Nusd: string;

  @Column("float", {
    name: "F24_CENTROIDE",
    precision: 126,
    default: () => "0",
  })
  f24Centroide: number;

  @Column("float", { name: "F24_QRT", precision: 126, default: () => "0" })
  f24Qrt: number;

  @Column("float", { name: "F24_F1", precision: 126, default: () => "0" })
  f24F1: number;

  @Column("float", { name: "F24_F2", precision: 126, default: () => "0" })
  f24F2: number;

  @Column("float", { name: "F24_CPE", precision: 126, default: () => "0" })
  f24Cpe: number;

  @Column("float", { name: "F24_PRTZ", precision: 126, default: () => "0" })
  f24Prtz: number;

  @Column("float", { name: "F24_DET", nullable: true, precision: 126 })
  f24Det: number | null;

  @Column("float", { name: "F24_F1ET", nullable: true, precision: 126 })
  f24F1Et: number | null;

  @Column("float", { name: "F24_CPEET", nullable: true, precision: 126 })
  f24Cpeet: number | null;

  @Column("float", { name: "F24_PRTZET", nullable: true, precision: 126 })
  f24Prtzet: number | null;

  @Column("float", { name: "F24_CEG", nullable: true, precision: 126 })
  f24Ceg: number | null;

  @Column("float", { name: "F24_CRTP", precision: 126, default: () => "0" })
  f24Crtp: number;

  @Column("float", {
    name: "F24_SALINIDAD",
    precision: 126,
    default: () => "0",
  })
  f24Salinidad: number;

  @Column("float", { name: "F24_VACRTABC", precision: 126, default: () => "0" })
  f24Vacrtabc: number;

  @Column("float", { name: "F24_VACRT", precision: 126, default: () => "0" })
  f24Vacrt: number;

  @Column("float", { name: "F24_FCK", precision: 126, default: () => "0" })
  f24Fck: number;

  @Column("float", { name: "F24_T", precision: 126, default: () => "0" })
  f24T: number;

  @Column("float", { name: "F24_CRTZ", precision: 126, default: () => "0" })
  f24Crtz: number;

  @Column("float", { name: "F24_CRT", precision: 126, default: () => "0" })
  f24Crt: number;

  @Column("float", { name: "F24_FACRT", precision: 126, default: () => "0" })
  f24Facrt: number;

  @Column("float", { name: "F24_FACCS", precision: 126, default: () => "0" })
  f24Faccs: number;

  @Column("date", { name: "F24_FECHA", default: () => "sysdate" })
  f24Fecha: Date;

  @Column("number", { name: "USUARIO", scale: 0, default: () => "0" })
  usuario: number;
}
