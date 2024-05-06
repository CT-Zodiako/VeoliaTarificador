import { Column, Entity, Index } from "typeorm";

@Index(
  "IXAUCO_COSTOSADICIONALES",
  ["apsaId", "emprEmpr", "diviDivi", "paraCosto20010", "costAnno", "costMes"],
  { unique: true }
)
@Index("PK_AUCO_COSTOSADICIONALES", ["costId"], { unique: true })
@Entity("AUCO_COSTOSADICIONALES")
export class AucoCostosadicionales {
  @Column("number", { primary: true, name: "COST_ID" })
  costId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "PARA_COSTO20010" })
  paraCosto20010: number;

  @Column("number", { name: "COST_ANNO" })
  costAnno: number;

  @Column("number", { name: "COST_MES" })
  costMes: number;

  @Column("float", { name: "COST_VARIACION", precision: 126 })
  costVariacion: number;

  @Column("float", { name: "COST_VALOR", precision: 126 })
  costValor: number;

  @Column("float", { name: "COST_MEDIOVALOR", precision: 126 })
  costMediovalor: number;

  @Column("float", { name: "COST_ACOBRAR", precision: 126 })
  costAcobrar: number;

  @Column("date", {
    name: "COST_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  costFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
