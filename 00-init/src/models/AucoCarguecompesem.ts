import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_AUCO_CARGUECOMPESEM",
  ["apsaId", "emprEmpr", "compAnno", "compMes"],
  { unique: true }
)
@Entity("AUCO_CARGUECOMPESEM")
export class AucoCarguecompesem {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "EMPR_EMPR", scale: 0 })
  emprEmpr: number;

  @Column("number", { primary: true, name: "COMP_ANNO", scale: 0 })
  compAnno: number;

  @Column("number", { primary: true, name: "COMP_MES", scale: 0 })
  compMes: number;

  @Column("float", { name: "COMP_N", precision: 126, default: () => "0" })
  compN: number;

  @Column("float", { name: "COMP_NAA", precision: 126, default: () => "0" })
  compNaa: number;

  @Column("float", { name: "COMP_NDA", precision: 126, default: () => "0" })
  compNda: number;

  @Column("float", { name: "COMP_QLU", precision: 126, default: () => "0" })
  compQlu: number;

  @Column("float", { name: "COMP_QNA", precision: 126, default: () => "0" })
  compQna: number;

  @Column("float", { name: "COMP_QBL", precision: 126, default: () => "0" })
  compQbl: number;

  @Column("float", { name: "COMP_QR", precision: 126, default: () => "0" })
  compQr: number;

  @Column("float", { name: "COMP_CBLJ", precision: 126, default: () => "0" })
  compCblj: number;

  @Column("float", { name: "COMP_LBLCOM", precision: 126, default: () => "0" })
  compLblcom: number;

  @Column("float", { name: "COMP_CRTVBA", precision: 126, default: () => "0" })
  compCrtvba: number;

  @Column("float", { name: "COMP_CDFVBA", precision: 126, default: () => "0" })
  compCdfvba: number;

  @Column("float", { name: "COMP_QRT", precision: 126, default: () => "0" })
  compQrt: number;

  @Column("date", {
    name: "COMP_FECCREA",
    nullable: true,
    default: () => "SYSDATE",
  })
  compFeccrea: Date | null;

  @Column("number", { name: "USUA_USUARIO", scale: 0 })
  usuaUsuario: number;
}
