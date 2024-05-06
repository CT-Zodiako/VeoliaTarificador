import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_F36", ["APSA_ID", "F36_ANNO", "F36_MES"], { unique: true })
@Entity("SUI_F36")
export class SuiF36 {
  @Column("float", { name: "F36_CTLM", precision: 126, default: () => "0" })
  F36_CTLM: number;

  @Column("float", { name: "F36_CTLMX", precision: 126, default: () => "0" })
  F36_CTLMX: number;

  @Column("float", { name: "F36_VACTLABC", precision: 126, default: () => "0" })
  F36_VACTLABC: number;

  @Column("float", { name: "F36_VACTL", precision: 126, default: () => "0" })
  F36_VACTL: number;

  @Column("float", { name: "F36_FCKCTL", precision: 126, default: () => "0" })
  F36_FCKCTL: number;

  @Column("float", { name: "F36_QRS", precision: 126, default: () => "0" })
  F36_QRS: number;

  @Column("float", { name: "F36_CTL", precision: 126, default: () => "0" })
  F36_CTL: number;

  @Column("float", { name: "F36_FACCTL", precision: 126, default: () => "0" })
  F36_FACCTL: number;

  @Column("date", { name: "F36_FECHA", default: () => "sysdate" })
  F36_FECHA: Date;

  @Column("number", { name: "USUARIO", scale: 0, default: () => "0" })
  USUARIO: number;

  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  APSA_ID: number;

  @Column("number", { primary: true, name: "F36_ANNO", scale: 0 })
  F36_ANNO: number;

  @Column("number", { primary: true, name: "F36_MES", scale: 0 })
  F36_MES: number;

  @Column("varchar2", { name: "F36_NUSD", length: 100, default: () => "'0'" })
  F36_NUSD: string;

  @Column("varchar2", {
    name: "F36_NOMDPTO",
    length: 100,
    default: () => "'0'",
  })
  F36_NOMDPTO: string;

  @Column("varchar2", {
    name: "F36_NOMMPIO",
    length: 100,
    default: () => "'0'",
  })
  F36_NOMMPIO: string;

  @Column("varchar2", { name: "F36_NOMDF", length: 100, default: () => "'0'" })
  F36_NOMDF: string;

  @Column("float", { name: "F36_VLMES", precision: 126, default: () => "0" })
  F36_VLMES: number;

  @Column("float", { name: "F36_VLMPROM", precision: 126, default: () => "0" })
  F36_VLMPROM: number;

  @Column("float", { name: "F36_ESCENA", precision: 126, default: () => "0" })
  F36_ESCENA: number;

  @Column("float", { name: "F36_CTLMVU", precision: 126, default: () => "0" })
  F36_CTLMVU: number;

  @Column("float", {
    name: "F36_ANNOPOSCLA",
    precision: 126,
    default: () => "0",
  })
  F36_ANNOPOSCLA: number;

  @Column("float", { name: "F36_CTLMPC", precision: 126, default: () => "0" })
  F36_CTLMPC: number;
}
