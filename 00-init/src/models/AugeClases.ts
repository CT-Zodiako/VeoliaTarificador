import { Column, Entity, Index, OneToMany } from "typeorm";
import { AugeParametros } from "./AugeParametros";

@Index("PK_GEN_TCLASES", ["clasClas"], { unique: true })
@Entity("AUGE_CLASES")
export class AugeClases {
  @Column("number", { primary: true, name: "CLAS_CLAS" })
  clasClas: number;

  @Column("varchar2", { name: "CLAS_NOMBRE", nullable: true, length: 50 })
  clasNombre: string | null;

  @Column("varchar2", { name: "CLAS_DESCRIPCION", nullable: true, length: 255 })
  clasDescripcion: string | null;

  @Column("varchar2", { name: "CLAS_EDITABLE", nullable: true, length: 1 })
  clasEditable: string | null;

  @Column("varchar2", { name: "CLAS_MODULO", nullable: true, length: 6 })
  clasModulo: string | null;

  @OneToMany(() => AugeParametros, (augeParametros) => augeParametros.clasClas2)
  augeParametros: AugeParametros[];
}
