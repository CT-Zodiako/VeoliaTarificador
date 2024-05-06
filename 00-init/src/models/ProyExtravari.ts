import { Column, Entity, Index } from "typeorm";

@Index("PK_PROY_EXTRAVARI", ["exvaId"], { unique: true })
@Entity("PROY_EXTRAVARI")
export class ProyExtravari {
  @Column("number", { primary: true, name: "EXVA_ID" })
  exvaId: number;

  @Column("varchar2", { name: "EXVA_NOMBRE", length: 50 })
  exvaNombre: string;

  @Column("varchar2", { name: "EXVA_DESCRI", length: 255 })
  exvaDescri: string;

  @Column("varchar2", {
    name: "EXVA_SQL1",
    length: 50,
    default: () => "'Nom Campo '",
  })
  exvaSql1: string;

  @Column("varchar2", {
    name: "EXVA_SQL2",
    length: 3000,
    default: () => "'sql para el PIVOT'",
  })
  exvaSql2: string;

  @Column("varchar2", {
    name: "EXVA_SQL3",
    length: 3000,
    default: () => "'sql ADICIONAL'",
  })
  exvaSql3: string;

  @Column("date", { name: "EXVA_FECHA", default: () => "sysdate" })
  exvaFecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
