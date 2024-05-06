import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_F36", ["apsaId", "f36Anno", "f36Mes"], { unique: true })
@Entity("SUI_F36")
export class SuiF36 {
  @Column("float", { name: "F36_CTLM", precision: 126, default: () => "0" })
  f36Ctlm: number;

  @Column("float", { name: "F36_CTLMX", precision: 126, default: () => "0" })
  f36Ctlmx: number;

  @Column("float", { name: "F36_VACTLABC", precision: 126, default: () => "0" })
  f36Vactlabc: number;

  @Column("float", { name: "F36_VACTL", precision: 126, default: () => "0" })
  f36Vactl: number;

  @Column("float", { name: "F36_FCKCTL", precision: 126, default: () => "0" })
  f36Fckctl: number;

  @Column("float", { name: "F36_QRS", precision: 126, default: () => "0" })
  f36Qrs: number;

  @Column("float", { name: "F36_CTL", precision: 126, default: () => "0" })
  f36Ctl: number;

  @Column("float", { name: "F36_FACCTL", precision: 126, default: () => "0" })
  f36Facctl: number;

  @Column("date", { name: "F36_FECHA", default: () => "sysdate" })
  f36Fecha: Date;

  @Column("number", { name: "USUARIO", scale: 0, default: () => "0" })
  usuario: number;

  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "F36_ANNO", scale: 0 })
  f36Anno: number;

  @Column("number", { primary: true, name: "F36_MES", scale: 0 })
  f36Mes: number;

  @Column("varchar2", { name: "F36_NUSD", length: 100, default: () => "'0'" })
  f36Nusd: string;

  @Column("varchar2", {
    name: "F36_NOMDPTO",
    length: 100,
    default: () => "'0'",
  })
  f36Nomdpto: string;

  @Column("varchar2", {
    name: "F36_NOMMPIO",
    length: 100,
    default: () => "'0'",
  })
  f36Nommpio: string;

  @Column("varchar2", { name: "F36_NOMDF", length: 100, default: () => "'0'" })
  f36Nomdf: string;

  @Column("float", { name: "F36_VLMES", precision: 126, default: () => "0" })
  f36Vlmes: number;

  @Column("float", { name: "F36_VLMPROM", precision: 126, default: () => "0" })
  f36Vlmprom: number;

  @Column("float", { name: "F36_ESCENA", precision: 126, default: () => "0" })
  f36Escena: number;

  @Column("float", { name: "F36_CTLMVU", precision: 126, default: () => "0" })
  f36Ctlmvu: number;

  @Column("float", {
    name: "F36_ANNOPOSCLA",
    precision: 126,
    default: () => "0",
  })
  f36Annoposcla: number;

  @Column("float", { name: "F36_CTLMPC", precision: 126, default: () => "0" })
  f36Ctlmpc: number;
}
