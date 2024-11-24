import { Column, Entity, Index } from "typeorm";

@Index("PK_PROY_PROYECCION", ["proyid"], { unique: true })
@Entity("PROY_PROYECCION")
export class ProyProyeccion {
  @Column("number", { primary: true, name: "PROYID", scale: 0 })
  proyid: number;

  @Column("number", { name: "APS", scale: 0 })
  aps: number;

  @Column("varchar2", { name: "PROYNOMBRE", length: 30 })
  proynombre: string;

  @Column("varchar2", { name: "PROYDESCRIPCION", length: 30 })
  proydescripcion: string;

  @Column("number", { name: "PROYTIPO100", default: () => "1" })
  proytipo100: number;

  @Column("number", { name: "PROYANNODES", scale: 0 })
  proyannodes: number;

  @Column("number", { name: "PROYMESDES", scale: 0 })
  proymesdes: number;

  @Column("number", { name: "PROYANNOHAS", scale: 0 })
  proyannohas: number;

  @Column("number", { name: "PROYMESHAS", scale: 0 })
  proymeshas: number;

  @Column("number", { name: "PROYESTADO", scale: 0, default: () => "1" })
  proyestado: number;

  @Column("number", { name: "PROYDEFINITIVA", scale: 0, default: () => "0" })
  proydefinitiva: number;

  @Column("date", { name: "PROYFECHA", default: () => "sysdate" })
  proyfecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
