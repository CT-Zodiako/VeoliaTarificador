import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_F35", ["APSA_ID", "F35_ANNO", "F35_MES"], { unique: true })
@Entity("SUI_F35")
export class SuiF35 {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  APSA_ID: number;

  @Column("number", { primary: true, name: "F35_ANNO", scale: 0 })
  F35_ANNO: number;

  @Column("number", { primary: true, name: "F35_MES", scale: 0 })
  F35_MES: number;

  @Column("varchar2", { name: "F35_NUSD", length: 100, default: () => "'0'" })
  F35_NUSD: string;

  @Column("varchar2", { name: "F35_NOMDF", length: 100, default: () => "'0'" })
  F35_NOMDF: string;

  @Column("float", { name: "F35_CAMRERS", precision: 126, default: () => "0" })
  F35_CAMRERS: number;

  @Column("float", { name: "F35_QRSMES", precision: 126, default: () => "0" })
  F35_QRSMES: number;

  @Column("float", { name: "F35_QRSPROM", precision: 126, default: () => "0" })
  F35_QRSPROM: number;

  @Column("float", { name: "F35_CDFVU", precision: 126, default: () => "0" })
  F35_CDFVU: number;

  @Column("float", { name: "F35_PERADDT", precision: 126, default: () => "0" })
  F35_PERADDT: number;

  @Column("float", { name: "F35_CDFPC", precision: 126, default: () => "0" })
  F35_CDFPC: number;

  @Column("float", {
    name: "F35_INCENTIVO",
    precision: 126,
    default: () => "0",
  })
  F35_INCENTIVO: number;

  @Column("varchar2", {
    name: "F35_DISPALT9",
    length: 4,
    default: () => "'NO'",
  })
  F35_DISPALT9: string;

  @Column("float", {
    name: "F35_INCCDFALT9",
    precision: 126,
    default: () => "0",
  })
  F35_INCCDFALT9: number;

  @Column("float", { name: "F35_VACDFABC", precision: 126, default: () => "0" })
  F35_VACDFABC: number;

  @Column("float", { name: "F35_VACDF", precision: 126, default: () => "0" })
  F35_VACDF: number;

  @Column("float", {
    name: "F35_PRCTCRRCP",
    precision: 126,
    default: () => "0",
  })
  F35_PRCTCRRCP: number;

  @Column("float", { name: "F35_CDF", precision: 126, default: () => "0" })
  F35_CDF: number;

  @Column("float", { name: "F35_CDFP", precision: 126, default: () => "0" })
  F35_CDFP: number;

  @Column("float", { name: "F35_FACCDF", precision: 126, default: () => "0" })
  F35_FACCDF: number;

  @Column("float", { name: "F35_V0", precision: 126, default: () => "0" })
  F35_V0: number;

  @Column("float", { name: "F35_VM", precision: 126, default: () => "0" })
  F35_VM: number;

  @Column("float", { name: "F35_MCRS", precision: 126, default: () => "0" })
  F35_MCRS: number;

  @Column("float", { name: "F35_ICRSM", precision: 126, default: () => "0" })
  F35_ICRSM: number;

  @Column("float", { name: "F35_ICCRS", precision: 126, default: () => "0" })
  F35_ICCRS: number;

  @Column("float", { name: "F35_FREIN", precision: 126, default: () => "0" })
  F35_FREIN: number;

  @Column("float", { name: "F35_CAPREMDF", precision: 126, default: () => "0" })
  F35_CAPREMDF: number;

  @Column("date", { name: "F35_FECHA", default: () => "sysdate" })
  F35_FECHA: Date;

  @Column("number", { name: "USUARIO", scale: 0, default: () => "0" })
  USUARIO: number;
}
