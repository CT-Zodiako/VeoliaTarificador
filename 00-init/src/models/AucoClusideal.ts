import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_CLUSIDEAL", ["clusId"], { unique: true })
@Entity("AUCO_CLUSIDEAL")
export class AucoClusideal {
  @Column("number", { primary: true, name: "CLUS_ID" })
  clusId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "CLUS_ANNO" })
  clusAnno: number;

  @Column("number", { name: "CLUS_MES" })
  clusMes: number;

  @Column("float", { name: "CLUS_M2CCJ", precision: 126 })
  clusM2Ccj: number;

  @Column("float", { name: "CLUS_M2LAVJ", precision: 126 })
  clusM2Lavj: number;

  @Column("float", { name: "CLUS_TIJ", precision: 126 })
  clusTij: number;

  @Column("float", { name: "CLUS_KLPJ", precision: 126 })
  clusKlpj: number;

  @Column("float", { name: "CLUS_TMJ", precision: 126 })
  clusTmj: number;

  @Column("float", { name: "CLUS_SMLV", precision: 126 })
  clusSmlv: number;

  @Column("float", { name: "CLUS_M3AGUA", precision: 126 })
  clusM3Agua: number;

  @Column("float", { name: "CLUS_CLAVJ", nullable: true, precision: 126 })
  clusClavj: number | null;

  @Column("float", { name: "CLUS_CLUS", nullable: true, precision: 126 })
  clusClus: number | null;

  @Column("float", { name: "CLUS_COMPCP", nullable: true, precision: 126 })
  clusCompcp: number | null;

  @Column("float", { name: "CLUS_COMPCCC", nullable: true, precision: 126 })
  clusCompccc: number | null;

  @Column("float", { name: "CLUS_COMPCLAVJ", nullable: true, precision: 126 })
  clusCompclavj: number | null;

  @Column("float", { name: "CLUS_COMPCLP", nullable: true, precision: 126 })
  clusCompclp: number | null;

  @Column("float", { name: "CLUS_COMPCCEI", nullable: true, precision: 126 })
  clusCompccei: number | null;

  @Column("float", { name: "CLUS_COMPCCEM", nullable: true, precision: 126 })
  clusCompccem: number | null;

  @Column("float", { name: "CLUS_VARIACION", nullable: true, precision: 126 })
  clusVariacion: number | null;

  @Column("float", { name: "CLUS_VLRCOSTO", nullable: true, precision: 126 })
  clusVlrcosto: number | null;

  @Column("date", { name: "CLUS_FECCRE", nullable: true })
  clusFeccre: Date | null;

  @Column("number", { name: "USUA_USUA", default: () => "0" })
  usuaUsua: number;
}
