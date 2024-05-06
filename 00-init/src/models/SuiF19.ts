import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_F19", ["apsaId", "f19Anno", "f19Mes"], { unique: true })
@Entity("SUI_F19")
export class SuiF19 {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "F19_ANNO", scale: 0 })
  f19Anno: number;

  @Column("number", { primary: true, name: "F19_MES", scale: 0 })
  f19Mes: number;

  @Column("float", { name: "F19_NJ", precision: 126, default: () => "0" })
  f19Nj: number;

  @Column("float", { name: "F19_NDJ", precision: 126, default: () => "0" })
  f19Ndj: number;

  @Column("float", { name: "F19_CRTJ", precision: 126, default: () => "0" })
  f19Crtj: number;

  @Column("float", { name: "F19_CDFJ", precision: 126, default: () => "0" })
  f19Cdfj: number;

  @Column("float", { name: "F19_QRTJ", precision: 126, default: () => "0" })
  f19Qrtj: number;

  @Column("float", { name: "F19_QRJ", precision: 126, default: () => "0" })
  f19Qrj: number;

  @Column("float", { name: "F19_QBLJ", precision: 126, default: () => "0" })
  f19Qblj: number;

  @Column("float", { name: "F19_QLUJ", precision: 126, default: () => "0" })
  f19Qluj: number;

  @Column("float", { name: "F19_QNAZ", precision: 126, default: () => "0" })
  f19Qnaz: number;

  @Column("float", { name: "F19_QAJ", precision: 126, default: () => "0" })
  f19Qaj: number;

  @Column("date", { name: "F19_FECHA", default: () => "sysdate" })
  f19Fecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
