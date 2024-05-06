import { Column, Entity, Index } from "typeorm";

@Index(
  "IX_AUCO_RESUMLIQUIDA_01",
  [
    "emprEmpr",
    "diviDivi",
    "apsaId",
    "rellId",
    "reliAnno",
    "reliMes",
    "reliVariable",
    "reliUbicacion20016",
  ],
  {}
)
@Index("PK_TAR_RESUMLIQUIDA", ["reliId"], { unique: true })
@Entity("AUCO_RESUMLIQUIDA")
export class AucoResumliquida {
  @Column("number", { primary: true, name: "RELI_ID" })
  reliId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "RELL_ID" })
  rellId: number;

  @Column("number", { name: "RELI_ANNO" })
  reliAnno: number;

  @Column("number", { name: "RELI_MES" })
  reliMes: number;

  @Column("number", { name: "RELI_ANNOSEMEST", default: () => "0" })
  reliAnnosemest: number;

  @Column("number", { name: "PARA_GRUPRESUM20017", default: () => "0" })
  paraGrupresum20017: number;

  @Column("varchar2", { name: "RELI_VARIABLE", length: 50 })
  reliVariable: string;

  @Column("float", { name: "RELI_VALOR", precision: 126, default: () => "0" })
  reliValor: number;

  @Column("number", { name: "RELI_ESTADO", default: () => "0" })
  reliEstado: number;

  @Column("date", {
    name: "RELI_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  reliFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", {
    name: "RELI_UBICACION20016",
    nullable: true,
    default: () => "2",
  })
  reliUbicacion20016: number | null;
}
