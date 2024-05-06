import { Column, Entity, Index } from "typeorm";

@Index("PK_TAR_CONSTANTES", ["consId"], { unique: true })
@Entity("AUCO_CONSTANTES")
export class AucoConstantes {
  @Column("number", { primary: true, name: "CONS_ID" })
  consId: number;

  @Column("number", { name: "PARA_GRUPO20001" })
  paraGrupo20001: number;

  @Column("varchar2", { name: "CONS_DESCRIPCION", length: 255 })
  consDescripcion: string;

  @Column("varchar2", { name: "CONS_VALOR", length: 255 })
  consValor: string;

  @Column("number", { name: "CONS_ESTADO", default: () => "1" })
  consEstado: number;

  @Column("date", {
    name: "CONS_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  consFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA", default: () => "0" })
  usuaUsua: number;
}
