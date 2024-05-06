import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_REVF35", ["reveId", "apsaId", "f35Anno", "f35Mes"], {
  unique: true,
})
@Entity("SUI_REVF35")
export class SuiRevf35 {
  @Column("float", {
    name: "F35_INCENTIVO",
    precision: 126,
    default: () => "0",
  })
  f35Incentivo: number;

  @Column("varchar2", {
    name: "F35_DISPALT9",
    length: 4,
    default: () => "'NO'",
  })
  f35Dispalt9: string;

  @Column("float", {
    name: "F35_INCCDFALT9",
    precision: 126,
    default: () => "0",
  })
  f35Inccdfalt9: number;

  @Column("float", { name: "F35_VACDFABC", precision: 126, default: () => "0" })
  f35Vacdfabc: number;

  @Column("float", { name: "F35_VACDF", precision: 126, default: () => "0" })
  f35Vacdf: number;

  @Column("float", {
    name: "F35_PRCTCRRCP",
    precision: 126,
    default: () => "0",
  })
  f35Prctcrrcp: number;

  @Column("float", { name: "F35_CDF", precision: 126, default: () => "0" })
  f35Cdf: number;

  @Column("float", { name: "F35_CDFP", precision: 126, default: () => "0" })
  f35Cdfp: number;

  @Column("float", { name: "F35_FACCDF", precision: 126, default: () => "0" })
  f35Faccdf: number;

  @Column("float", { name: "F35_V0", precision: 126, default: () => "0" })
  f35V0: number;

  @Column("float", { name: "F35_VM", precision: 126, default: () => "0" })
  f35Vm: number;

  @Column("float", { name: "F35_MCRS", precision: 126, default: () => "0" })
  f35Mcrs: number;

  @Column("float", { name: "F35_ICRSM", precision: 126, default: () => "0" })
  f35Icrsm: number;

  @Column("float", { name: "F35_ICCRS", precision: 126, default: () => "0" })
  f35Iccrs: number;

  @Column("float", { name: "F35_FREIN", precision: 126, default: () => "0" })
  f35Frein: number;

  @Column("float", { name: "F35_CAPREMDF", precision: 126, default: () => "0" })
  f35Capremdf: number;

  @Column("date", { name: "F35_FECHA", default: () => "sysdate" })
  f35Fecha: Date;

  @Column("number", { name: "USUARIO", scale: 0, default: () => "0" })
  usuario: number;

  @Column("number", { primary: true, name: "REVE_ID", scale: 0 })
  reveId: number;

  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "F35_ANNO", scale: 0 })
  f35Anno: number;

  @Column("number", { primary: true, name: "F35_MES", scale: 0 })
  f35Mes: number;

  @Column("varchar2", { name: "F35_NUSD", length: 100, default: () => "'0'" })
  f35Nusd: string;

  @Column("varchar2", { name: "F35_NOMDF", length: 100, default: () => "'0'" })
  f35Nomdf: string;

  @Column("float", { name: "F35_CAMRERS", precision: 126, default: () => "0" })
  f35Camrers: number;

  @Column("float", { name: "F35_QRSMES", precision: 126, default: () => "0" })
  f35Qrsmes: number;

  @Column("float", { name: "F35_QRSPROM", precision: 126, default: () => "0" })
  f35Qrsprom: number;

  @Column("float", { name: "F35_CDFVU", precision: 126, default: () => "0" })
  f35Cdfvu: number;

  @Column("float", { name: "F35_PERADDT", precision: 126, default: () => "0" })
  f35Peraddt: number;

  @Column("float", { name: "F35_CDFPC", precision: 126, default: () => "0" })
  f35Cdfpc: number;
}
