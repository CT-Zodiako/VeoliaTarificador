import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_F19", ["APSA_ID", "F19_ANNO", "F19_MES"], { unique: true })
@Entity("SUI_F19")
export class Revercione {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  APSA_ID: number;

  @Column("number", { primary: true, name: "F19_ANNO", scale: 0 })
  F19_ANNO: number;

  @Column("number", { primary: true, name: "F19_MES", scale: 0 })
  F19_MES: number;

  @Column("float", { name: "F19_NJ", precision: 126, default: () => "0" })
  F19_NJ: number;

  @Column("float", { name: "F19_NDJ", precision: 126, default: () => "0" })
  F19_NDJ: number;

  @Column("float", { name: "F19_CRTJ", precision: 126, default: () => "0" })
  F19_CRTJ: number;

  @Column("float", { name: "F19_CDFJ", precision: 126, default: () => "0" })
  F19_CDFJ: number;

  @Column("float", { name: "F19_QRTJ", precision: 126, default: () => "0" })
  F19_QRTJ: number;

  @Column("float", { name: "F19_QRJ", precision: 126, default: () => "0" })
  F19_QRJ: number;

  @Column("float", { name: "F19_QBLJ", precision: 126, default: () => "0" })
  F19_QBLJ: number;

  @Column("float", { name: "F19_QLUJ", precision: 126, default: () => "0" })
  F19_QLUJ: number;

  @Column("float", { name: "F19_QNAZ", precision: 126, default: () => "0" })
  F19_QNAZ: number;

  @Column("float", { name: "F19_QAJ", precision: 126, default: () => "0" })
  F19_QAJ: number;

  @Column("date", { name: "F19_FECHA", default: () => "sysdate" })
  F19_FECHA: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  USUARIO: number;
}

