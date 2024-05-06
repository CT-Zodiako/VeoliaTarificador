import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AugeEmpresas } from "./AugeEmpresas";

@Index("PK_AUCO_COSTOSBASE", ["costId", "emprEmpr"], { unique: true })
@Entity("AUCO_COSTOSBASE")
export class AucoCostosbase {
  @Column("number", { primary: true, name: "COST_ID" })
  costId: number;

  @Column("number", { primary: true, name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "COST_ANNO" })
  costAnno: number;

  @Column("number", { name: "COST_MES", nullable: true })
  costMes: number | null;

  @Column("float", { name: "COST_CLP", precision: 126 })
  costClp: number;

  @Column("float", { name: "COST_CCEI", precision: 126 })
  costCcei: number;

  @Column("float", { name: "COST_CCEM", nullable: true, precision: 126 })
  costCcem: number | null;

  @ManyToOne(() => AugeEmpresas, (augeEmpresas) => augeEmpresas.aucoCostosbases)
  @JoinColumn([{ name: "EMPR_EMPR", referencedColumnName: "emprEmpr" }])
  emprEmpr2: AugeEmpresas;
}
