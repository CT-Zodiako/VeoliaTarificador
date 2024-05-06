import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_INVCOMPONENTES", ["incoId"], { unique: true })
@Entity("AUCO_INVCOMPONENTES")
export class AucoInvcomponentes {
  @Column("number", { name: "PARA_UNIMEDIDA20003" })
  paraUnimedida20003: number;

  @Column("clob", { name: "INCO_DESCRIPCION" })
  incoDescripcion: string;

  @Column("number", { name: "PARA_RESOLUCRA20004" })
  paraResolucra20004: number;

  @Column("varchar2", { name: "INCO_ARTICULO", length: 30 })
  incoArticulo: string;

  @Column("date", {
    name: "INCO_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  incoFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", { primary: true, name: "INCO_ID" })
  incoId: number;

  @Column("number", { name: "INCO_PADRE" })
  incoPadre: number;

  @Column("number", { name: "PARA_CATFORMULA20002" })
  paraCatformula20002: number;

  @Column("varchar2", { name: "INCO_NOMCOMPONENTE", length: 20 })
  incoNomcomponente: string;
}
