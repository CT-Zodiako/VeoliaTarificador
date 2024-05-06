import { Column, Entity, Index } from "typeorm";

@Index("PKGENE_REGIAPS", ["regiid", "apsaid"], { unique: true })
@Entity("GENE_REGIAPS")
export class GeneRegiaps {
  @Column("number", { primary: true, name: "REGIID", scale: 0 })
  regiid: number;

  @Column("number", { primary: true, name: "APSAID", scale: 0 })
  apsaid: number;

  @Column("number", { name: "REAPESTADO", scale: 0 })
  reapestado: number;

  @Column("date", { name: "REAPFECHA", default: () => "sysdate" })
  reapfecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
