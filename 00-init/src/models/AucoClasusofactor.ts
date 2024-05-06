import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AucoClasesuso } from "./AucoClasesuso";

@Index("PK_TAR_CLASUSOFACTOR", ["clfaId"], { unique: true })
@Entity("AUCO_CLASUSOFACTOR")
export class AucoClasusofactor {
  @Column("number", { primary: true, name: "CLFA_ID" })
  clfaId: number;

  @Column("number", { name: "FAPR_CODIGO" })
  faprCodigo: number;

  @Column("number", { name: "CLFA_ESTADO", default: () => "1" })
  clfaEstado: number;

  @Column("date", {
    name: "CLFA_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  clfaFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @ManyToOne(
    () => AucoClasesuso,
    (aucoClasesuso) => aucoClasesuso.aucoClasusofactors
  )
  @JoinColumn([{ name: "CLAS_CLASE", referencedColumnName: "clasClase" }])
  clasClase: AucoClasesuso;
}
