import { Column, Entity, Index } from "typeorm";

@Index("PKGENE_REGIONALES", ["regiid"], { unique: true })
@Entity("GENE_REGIONALES")
export class GeneRegionales {
  @Column("number", { primary: true, name: "REGIID", scale: 0 })
  regiid: number;

  @Column("varchar2", { name: "REGINOM", length: 100 })
  reginom: string;

  @Column("number", { name: "REGIESTADO", scale: 0 })
  regiestado: number;

  @Column("date", { name: "REGIFECHA", default: () => "sysdate" })
  regifecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
