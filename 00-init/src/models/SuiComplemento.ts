import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_COMPLEMENTO", ["apsaId", "comAnno", "comMes"], { unique: true })
@Entity("SUI_COMPLEMENTO")
export class SuiComplemento {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "COM_ANNO", scale: 0 })
  comAnno: number;

  @Column("number", { primary: true, name: "COM_MES", scale: 0 })
  comMes: number;

  @Column("float", { name: "F35_QRS_MES", precision: 126, default: () => "0" })
  f35QrsMes: number;

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

  @Column("float", { name: "F35_CAMRERS", precision: 126, default: () => "0" })
  f35Camrers: number;

  @Column("float", {
    name: "F35_INCCDFALT9",
    precision: 126,
    default: () => "0",
  })
  f35Inccdfalt9: number;

  @Column("float", {
    name: "F35_PRCTCRRCP",
    precision: 126,
    default: () => "0",
  })
  f35Prctcrrcp: number;

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

  @Column("float", { name: "F35_CAPPERDF", precision: 126, default: () => "0" })
  f35Capperdf: number;

  @Column("date", { name: "COM_FECHA", default: () => "sysdate" })
  comFecha: Date;

  @Column("number", { name: "USUARIO", scale: 0, default: () => "0" })
  usuario: number;

  @Column("float", { name: "F35_DISPALT9", precision: 126, default: () => "0" })
  f35Dispalt9: number;

  @Column("float", { name: "F36_VL_MES", precision: 126, default: () => "0" })
  f36VlMes: number;
}
