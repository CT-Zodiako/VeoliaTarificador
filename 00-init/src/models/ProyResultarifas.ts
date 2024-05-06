import { Column, Entity, Index } from "typeorm";

@Index(
  "IX_PROY_RESULTARIFAS",
  [
    "proyId",
    "apsaId",
    "claseUso",
    "factorProd",
    "tipoTar",
    "tipoFact",
    "tariAnno",
    "tariMes",
  ],
  { unique: true }
)
@Index("PK_PROY_RESULTARIFAS", ["tariId"], { unique: true })
@Entity("PROY_RESULTARIFAS")
export class ProyResultarifas {
  @Column("float", { name: "TARI_TINC", precision: 126, default: () => "0" })
  tariTinc: number;

  @Column("number", { primary: true, name: "TARI_ID" })
  tariId: number;

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

  @Column("number", { name: "TIPO_FACT" })
  tipoFact: number;

  @Column("number", { name: "TARI_ANNO" })
  tariAnno: number;

  @Column("number", { name: "TARI_MES" })
  tariMes: number;

  @Column("float", { name: "TARI_SUBCON", precision: 126, default: () => "0" })
  tariSubcon: number;

  @Column("float", { name: "TARI_TCPROP", precision: 126, default: () => "0" })
  tariTcprop: number;

  @Column("float", { name: "TARI_TCTERC", precision: 126, default: () => "0" })
  tariTcterc: number;

  @Column("float", { name: "TARI_TCAPRO", precision: 126, default: () => "0" })
  tariTcapro: number;

  @Column("float", { name: "TARI_TBL", precision: 126, default: () => "0" })
  tariTbl: number;

  @Column("float", { name: "TARI_TLU", precision: 126, default: () => "0" })
  tariTlu: number;

  @Column("float", { name: "TARI_TRT", precision: 126, default: () => "0" })
  tariTrt: number;

  @Column("float", { name: "TARI_TDF", precision: 126, default: () => "0" })
  tariTdf: number;

  @Column("float", { name: "TARI_TIAT", precision: 126, default: () => "0" })
  tariTiat: number;

  @Column("float", { name: "TARI_TTL", precision: 126, default: () => "0" })
  tariTtl: number;

  @Column("float", { name: "TARI_TA", precision: 126, default: () => "0" })
  tariTa: number;

  @Column("float", { name: "TARI_TOTAL", precision: 126, default: () => "0" })
  tariTotal: number;

  @Column("float", { name: "TARI_TOTSC", precision: 126, default: () => "0" })
  tariTotsc: number;

  @Column("number", { name: "TARI_ESTADO", default: () => "1" })
  tariEstado: number;

  @Column("date", {
    name: "TARI_FECHA",
    nullable: true,
    default: () => "sysdate",
  })
  tariFecha: Date | null;

  @Column("number", { name: "TARI_USUA" })
  tariUsua: number;
}
