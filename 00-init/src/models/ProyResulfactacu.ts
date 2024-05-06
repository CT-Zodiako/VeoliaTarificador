import { Column, Entity, Index } from "typeorm";

@Index(
  "IX_PROY_RESULFACTACU",
  [
    "proyId",
    "apsaId",
    "claseUso",
    "factorProd",
    "tipoTar",
    "facuAnno",
    "facuMes",
  ],
  { unique: true }
)
@Index("PK_PROY_RESULFACTACU", ["facuId"], { unique: true })
@Entity("PROY_RESULFACTACU")
export class ProyResulfactacu {
  @Column("number", { primary: true, name: "FACU_ID" })
  facuId: number;

  @Column("number", { name: "PROY_ID" })
  proyId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "CLASE_USO" })
  claseUso: number;

  @Column("number", { name: "FACTOR_PROD" })
  factorProd: number;

  @Column("number", { name: "TIPO_TAR" })
  tipoTar: number;

  @Column("number", { name: "FACU_ANNO" })
  facuAnno: number;

  @Column("number", { name: "FACU_MES" })
  facuMes: number;

  @Column("float", { name: "FACU_SUBCON", precision: 126, default: () => "0" })
  facuSubcon: number;

  @Column("float", {
    name: "FACU_USUARIOS",
    precision: 126,
    default: () => "0",
  })
  facuUsuarios: number;

  @Column("float", { name: "FACU_TCPROP", precision: 126, default: () => "0" })
  facuTcprop: number;

  @Column("float", { name: "FACU_TCTERC", precision: 126, default: () => "0" })
  facuTcterc: number;

  @Column("float", { name: "FACU_TCAPRO", precision: 126, default: () => "0" })
  facuTcapro: number;

  @Column("float", { name: "FACU_TBL", precision: 126, default: () => "0" })
  facuTbl: number;

  @Column("float", { name: "FACU_TLU", precision: 126, default: () => "0" })
  facuTlu: number;

  @Column("float", { name: "FACU_TRT", precision: 126, default: () => "0" })
  facuTrt: number;

  @Column("float", { name: "FACU_TDF", precision: 126, default: () => "0" })
  facuTdf: number;

  @Column("float", { name: "FACU_TIAT", precision: 126, default: () => "0" })
  facuTiat: number;

  @Column("float", { name: "FACU_TTL", precision: 126, default: () => "0" })
  facuTtl: number;

  @Column("float", { name: "FACU_TA", precision: 126, default: () => "0" })
  facuTa: number;

  @Column("float", { name: "FACU_TOTAL", precision: 126, default: () => "0" })
  facuTotal: number;

  @Column("float", { name: "FACU_TOTSC", precision: 126, default: () => "0" })
  facuTotsc: number;

  @Column("number", { name: "FACU_ESTADO", default: () => "1" })
  facuEstado: number;

  @Column("date", {
    name: "FACU_FECHA",
    nullable: true,
    default: () => "sysdate",
  })
  facuFecha: Date | null;

  @Column("number", { name: "FACU_USUA" })
  facuUsua: number;

  @Column("float", { name: "FACU_TINC", precision: 126, default: () => "0" })
  facuTinc: number;

  @Column("float", {
    name: "FACU_TOTPROPLENO",
    precision: 126,
    default: () => "0",
  })
  facuTotpropleno: number;

  @Column("float", {
    name: "FACU_TOTPROSUBCON",
    precision: 126,
    default: () => "0",
  })
  facuTotprosubcon: number;
}
