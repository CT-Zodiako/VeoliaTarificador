import { Column, Entity, Index } from "typeorm";

@Index("PK_PROY_VALORTABLA", ["vrtbId"], { unique: true })
@Entity("PROY_VALORTABLA")
export class ProyValortabla {
  @Column("varchar2", { name: "VRTB_NOMBRE", length: 100 })
  vrtbNombre: string;

  @Column("varchar2", { name: "VRTB_DESCRI", length: 255 })
  vrtbDescri: string;

  @Column("varchar2", {
    name: "VRTB_SQLPROM",
    length: 3000,
    default: () => "'Nom Campo '",
  })
  vrtbSqlprom: string;

  @Column("varchar2", {
    name: "VRTB_SQLMES",
    length: 3000,
    default: () => "'sql para el PIVOT'",
  })
  vrtbSqlmes: string;

  @Column("varchar2", {
    name: "VRTB_SQLADD",
    length: 3000,
    default: () => "'sql ADICIONAL'",
  })
  vrtbSqladd: string;

  @Column("date", { name: "VRTB_FECHA", default: () => "sysdate" })
  vrtbFecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;

  @Column("number", { primary: true, name: "VRTB_ID" })
  vrtbId: number;
}
