import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { AucoRellenos } from "./AucoRellenos";

@Index("PK_AUCO_CERTRELLENO", ["rellRell"], { unique: true })
@Index("UK_AUCO_CERTRELLENO", ["emprEmpr", "rellAnno", "rellMes"], {
  unique: true,
})
@Entity("AUCO_CERTRELLENO")
export class AucoCertrelleno {
  @Column("number", { primary: true, name: "RELL_RELL" })
  rellRell: number;

  @Column("number", { name: "EMPR_EMPR", unique: true })
  emprEmpr: number;

  @Column("number", { name: "RELL_ANNO", unique: true })
  rellAnno: number;

  @Column("number", { name: "RELL_MES", unique: true })
  rellMes: number;

  @Column("float", {
    name: "RELL_QRS",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  rellQrs: number | null;

  @Column("float", {
    name: "RELL_VL",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  rellVl: number | null;

  @Column("float", {
    name: "RELL_CDF",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  rellCdf: number | null;

  @Column("float", {
    name: "RELL_CTL",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  rellCtl: number | null;

  @Column("float", {
    name: "RELL_ESCENARIO",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  rellEscenario: number | null;

  @Column("float", {
    name: "RELL_C",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  rellC: number | null;

  @Column("date", {
    name: "RELL_FECHA",
    nullable: true,
    default: () => "sysdate",
  })
  rellFecha: Date | null;

  @Column("number", { name: "USUA_USUA", nullable: true, default: () => "0" })
  usuaUsua: number | null;

  @OneToOne(() => AucoRellenos, (aucoRellenos) => aucoRellenos.aucoCertrelleno)
  @JoinColumn([{ name: "RELL_RELL", referencedColumnName: "rellId" }])
  rellRell2: AucoRellenos;
}
