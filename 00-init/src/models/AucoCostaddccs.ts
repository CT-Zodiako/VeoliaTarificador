import { Column, Entity, Index } from "typeorm";

@Index(
  "IXAUCO_COSTADDCCS01",
  ["apsaId", "emprEmpr", "diviDivi", "paraCosto20010", "caccAnno", "caccMes"],
  { unique: true }
)
@Index("PK_TAR_COSTADDCCS", ["caccId"], { unique: true })
@Entity("AUCO_COSTADDCCS")
export class AucoCostaddccs {
  @Column("number", { primary: true, name: "CACC_ID" })
  caccId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "PARA_COSTO20010" })
  paraCosto20010: number;

  @Column("number", { name: "CACC_ANNO" })
  caccAnno: number;

  @Column("number", { name: "CACC_MES" })
  caccMes: number;

  @Column("float", { name: "CACC_VARIACION", precision: 126 })
  caccVariacion: number;

  @Column("float", { name: "CACC_VALOR", precision: 126 })
  caccValor: number;

  @Column("float", { name: "CACC_MEDIOVALOR", precision: 126 })
  caccMediovalor: number;

  @Column("float", { name: "CACC_ACOBRAR", precision: 126 })
  caccAcobrar: number;

  @Column("date", {
    name: "CACC_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  caccFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
