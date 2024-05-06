import { Column, Entity, Index } from "typeorm";

@Index("PKGENE_PERIODOS", ["perianno", "perimes"], { unique: true })
@Entity("GENE_PERIODOS")
export class GenePeriodos {
  @Column("number", { primary: true, name: "PERIANNO", scale: 0 })
  perianno: number;

  @Column("number", { primary: true, name: "PERIMES", scale: 0 })
  perimes: number;
}
