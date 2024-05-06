import { Column, Entity, Index } from "typeorm";

@Index("SUI_ESTADO", ["apsid", "estanno", "estmes", "estfor"], { unique: true })
@Entity("SUI_ESTADO")
export class SuiEstado {
  @Column("number", { primary: true, name: "APSID", scale: 0 })
  apsid: number;

  @Column("number", { primary: true, name: "ESTANNO", scale: 0 })
  estanno: number;

  @Column("number", { primary: true, name: "ESTMES", scale: 0 })
  estmes: number;

  @Column("number", { primary: true, name: "ESTFOR", scale: 0 })
  estfor: number;

  @Column("varchar2", {
    name: "ESTEST",
    length: 20,
    default: () => "'Pendiente'",
  })
  estest: string;

  @Column("date", { name: "ESTFECCREA", default: () => "sysdate" })
  estfeccrea: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
