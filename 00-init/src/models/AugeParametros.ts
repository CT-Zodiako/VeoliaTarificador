import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AugeClases } from "./AugeClases";

@Index("PK_GEN_TPARAMETROS", ["clasClas", "paraPara"], { unique: true })
@Entity("AUGE_PARAMETROS")
export class AugeParametros {
  @Column("number", { primary: true, name: "CLAS_CLAS" })
  clasClas: number;

  @Column("number", { primary: true, name: "PARA_PARA" })
  paraPara: number;

  @Column("varchar2", { name: "PARA_NOMBRE", nullable: true, length: 50 })
  paraNombre: string | null;

  @Column("varchar2", { name: "PARA_DESCRI", nullable: true, length: 255 })
  paraDescri: string | null;

  @Column("varchar2", { name: "PARA_EDITABLE", nullable: true, length: 1 })
  paraEditable: string | null;

  @Column("varchar2", { name: "PARA_VALOR1", nullable: true, length: 50 })
  paraValor1: string | null;

  @Column("varchar2", { name: "PARA_VALOR2", nullable: true, length: 50 })
  paraValor2: string | null;

  @Column("varchar2", { name: "PARA_ESTADO", nullable: true, length: 1 })
  paraEstado: string | null;

  @Column("number", { name: "PARA_HOMOLOGACION", nullable: true })
  paraHomologacion: number | null;

  @ManyToOne(() => AugeClases, (augeClases) => augeClases.augeParametros)
  @JoinColumn([{ name: "CLAS_CLAS", referencedColumnName: "clasClas" }])
  clasClas2: AugeClases;
}
