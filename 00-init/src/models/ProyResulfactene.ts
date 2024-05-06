import { Column, Entity, Index } from "typeorm";

@Index(
  "IX_PROY_RESULFACTENE",
  [
    "proyId",
    "apsaId",
    "claseUso",
    "factorProd",
    "tipoTar",
    "faenAnno",
    "faenMes",
  ],
  { unique: true }
)
@Index("PK_PROY_RESULFACTENE", ["faenId"], { unique: true })
@Entity("PROY_RESULFACTENE")
export class ProyResulfactene {
  @Column("number", { name: "FACTOR_PROD" })
  factorProd: number;

  @Column("number", { name: "TIPO_TAR" })
  tipoTar: number;

  @Column("number", { name: "FAEN_ANNO" })
  faenAnno: number;

  @Column("number", { name: "FAEN_MES" })
  faenMes: number;

  @Column("float", { name: "FAEN_SUBCON", precision: 126, default: () => "0" })
  faenSubcon: number;

  @Column("float", {
    name: "FAEN_USUARIOS",
    precision: 126,
    default: () => "0",
  })
  faenUsuarios: number;

  @Column("float", { name: "FAEN_TCPROP", precision: 126, default: () => "0" })
  faenTcprop: number;

  @Column("float", { name: "FAEN_TCTERC", precision: 126, default: () => "0" })
  faenTcterc: number;

  @Column("float", { name: "FAEN_TCAPRO", precision: 126, default: () => "0" })
  faenTcapro: number;

  @Column("float", { name: "FAEN_TBL", precision: 126, default: () => "0" })
  faenTbl: number;

  @Column("float", { name: "FAEN_TLU", precision: 126, default: () => "0" })
  faenTlu: number;

  @Column("float", { name: "FAEN_TRT", precision: 126, default: () => "0" })
  faenTrt: number;

  @Column("float", { name: "FAEN_TDF", precision: 126, default: () => "0" })
  faenTdf: number;

  @Column("float", { name: "FAEN_TIAT", precision: 126, default: () => "0" })
  faenTiat: number;

  @Column("float", { name: "FAEN_TTL", precision: 126, default: () => "0" })
  faenTtl: number;

  @Column("float", { name: "FAEN_TA", precision: 126, default: () => "0" })
  faenTa: number;

  @Column("float", { name: "FAEN_TOTAL", precision: 126, default: () => "0" })
  faenTotal: number;

  @Column("float", { name: "FAEN_TOTSC", precision: 126, default: () => "0" })
  faenTotsc: number;

  @Column("number", { name: "FAEN_ESTADO", default: () => "1" })
  faenEstado: number;

  @Column("date", {
    name: "FAEN_FECHA",
    nullable: true,
    default: () => "sysdate",
  })
  faenFecha: Date | null;

  @Column("number", { name: "FAEN_USUA" })
  faenUsua: number;

  @Column("float", { name: "FAEN_TINC", precision: 126, default: () => "0" })
  faenTinc: number;

  @Column("float", {
    name: "FAEN_TOTPROPLENO",
    precision: 126,
    default: () => "0",
  })
  faenTotpropleno: number;

  @Column("float", {
    name: "FAEN_TOTPROSUBCON",
    precision: 126,
    default: () => "0",
  })
  faenTotprosubcon: number;

  @Column("number", { primary: true, name: "FAEN_ID" })
  faenId: number;

  @Column("number", { name: "PROY_ID" })
  proyId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "CLASE_USO" })
  claseUso: number;
}
