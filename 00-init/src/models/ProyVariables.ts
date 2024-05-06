import { Column, Entity, Index } from "typeorm";

@Index(
  "IND_PROY_VARIABLES_01",
  [
    "proyid",
    "aps",
    "empresa",
    "municipio",
    "relleno",
    "proyanno",
    "proymes",
    "exvaId",
  ],
  { unique: true }
)
@Index("PK_PROY_VARIABLES", ["variid"], { unique: true })
@Entity("PROY_VARIABLES")
export class ProyVariables {
  @Column("number", { primary: true, name: "VARIID", scale: 0 })
  variid: number;

  @Column("number", { name: "PROYID", scale: 0 })
  proyid: number;

  @Column("number", { name: "APS", scale: 0 })
  aps: number;

  @Column("number", { name: "EMPRESA", scale: 0 })
  empresa: number;

  @Column("number", { name: "MUNICIPIO", scale: 0 })
  municipio: number;

  @Column("number", { name: "RELLENO", scale: 0 })
  relleno: number;

  @Column("number", { name: "PROYANNO", scale: 0 })
  proyanno: number;

  @Column("number", { name: "PROYMES", scale: 0 })
  proymes: number;

  @Column("number", { name: "EXVA_ID", scale: 0 })
  exvaId: number;

  @Column("float", { name: "VALORACTUAL", precision: 126 })
  valoractual: number;

  @Column("float", { name: "TENDENCIA", precision: 126 })
  tendencia: number;

  @Column("float", { name: "VALORPROY", precision: 126 })
  valorproy: number;

  @Column("date", { name: "FECHA", default: () => "sysdate" })
  fecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
