import { Column, Entity, Index } from "typeorm";

@Index(
  "IXAUCO_REVEUSUAPSEMPRDIVI01",
  [
    "iuaeId",
    "apsaId",
    "emprEmpr",
    "diviDivi",
    "faprCodigo",
    "clasClaseuso",
    "paraTiptar20012",
    "iuaeAnno",
    "iuaeMes",
    "paraUbicacion20016",
    "paraTipfac20014",
  ],
  { unique: true }
)
@Index("PK_AUCO_REVEUSUAPSEMPRDIVI", ["reveId", "iuaeId"], { unique: true })
@Entity("AUCO_REVEUSUAPSEMPRDIVI")
export class AucoReveusuapsemprdivi {
  @Column("number", { primary: true, name: "REVE_ID" })
  reveId: number;

  @Column("number", { primary: true, name: "IUAE_ID" })
  iuaeId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "FAPR_CODIGO" })
  faprCodigo: number;

  @Column("number", { name: "CLAS_CLASEUSO" })
  clasClaseuso: number;

  @Column("number", { name: "PARA_TIPTAR20012" })
  paraTiptar20012: number;

  @Column("number", { name: "IUAE_ANNO" })
  iuaeAnno: number;

  @Column("number", { name: "IUAE_MES" })
  iuaeMes: number;

  @Column("float", { name: "IUAE_CANTIDAD", precision: 126 })
  iuaeCantidad: number;

  @Column("float", { name: "IUAE_TONELADAS", precision: 126 })
  iuaeToneladas: number;

  @Column("date", {
    name: "IUAE_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  iuaeFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", { name: "PARA_UBICACION20016", default: () => "2" })
  paraUbicacion20016: number;

  @Column("number", { name: "PARA_TIPFAC20014", nullable: true })
  paraTipfac20014: number | null;
}
