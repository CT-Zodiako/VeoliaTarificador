import { Column, Entity, Index, OneToMany } from "typeorm";
import { AucoAforadosaps } from "./AucoAforadosaps";
import { AucoCertresucomer } from "./AucoCertresucomer";
import { AucoClasusofactor } from "./AucoClasusofactor";

@Index("PK_TAR_CLASESUSO", ["clasClase"], { unique: true })
@Entity("AUCO_CLASESUSO")
export class AucoClasesuso {
  @Column("number", { primary: true, name: "CLAS_CLASE" })
  clasClase: number;

  @Column("char", { name: "CLAS_NOMBRE", nullable: true, length: 30 })
  clasNombre: string | null;

  @Column("char", { name: "CLAS_DESCRIPCION", nullable: true, length: 30 })
  clasDescripcion: string | null;

  @Column("date", {
    name: "CLAS_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  clasFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @OneToMany(
    () => AucoAforadosaps,
    (aucoAforadosaps) => aucoAforadosaps.clasClase
  )
  aucoAforadosaps: AucoAforadosaps[];

  @OneToMany(
    () => AucoCertresucomer,
    (aucoCertresucomer) => aucoCertresucomer.clasClase2
  )
  aucoCertresucomers: AucoCertresucomer[];

  @OneToMany(
    () => AucoClasusofactor,
    (aucoClasusofactor) => aucoClasusofactor.clasClase
  )
  aucoClasusofactors: AucoClasusofactor[];
}
