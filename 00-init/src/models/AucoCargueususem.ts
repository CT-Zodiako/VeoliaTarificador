import { Column, Entity, Index } from "typeorm";

@Index(
  "AUCO_CARGUEUSUSEM_PK",
  [
    "causCodaps",
    "causAnno",
    "causSemestre",
    "causCodcu",
    "causCodfactor",
    "causCodtipo",
  ],
  { unique: true }
)
@Entity("AUCO_CARGUEUSUSEM")
export class AucoCargueususem {
  @Column("number", { primary: true, name: "CAUS_CODAPS" })
  causCodaps: number;

  @Column("varchar2", { name: "CAUS_APSNOM", length: 150 })
  causApsnom: string;

  @Column("number", { primary: true, name: "CAUS_ANNO" })
  causAnno: number;

  @Column("number", { primary: true, name: "CAUS_SEMESTRE" })
  causSemestre: number;

  @Column("number", { primary: true, name: "CAUS_CODCU" })
  causCodcu: number;

  @Column("varchar2", { name: "CAUS_NOMCU", length: 100 })
  causNomcu: string;

  @Column("number", { primary: true, name: "CAUS_CODFACTOR" })
  causCodfactor: number;

  @Column("number", { name: "CAUS_NOMFACTOR" })
  causNomfactor: number;

  @Column("number", { primary: true, name: "CAUS_CODTIPO" })
  causCodtipo: number;

  @Column("varchar2", { name: "CAUS_NOMTIPO", length: 150 })
  causNomtipo: string;

  @Column("number", { name: "CAUS_CANTM1" })
  causCantm1: number;

  @Column("number", { name: "CAUS_CANTM2" })
  causCantm2: number;

  @Column("number", { name: "CAUS_CANTM3" })
  causCantm3: number;

  @Column("number", { name: "CAUS_CANTM4" })
  causCantm4: number;

  @Column("number", { name: "CAUS_CANTM5" })
  causCantm5: number;

  @Column("number", { name: "CAUS_CANTM6" })
  causCantm6: number;

  @Column("number", { name: "CAUS_TONM1" })
  causTonm1: number;

  @Column("number", { name: "CAUS_TONM2" })
  causTonm2: number;

  @Column("number", { name: "CAUS_TONM3" })
  causTonm3: number;

  @Column("number", { name: "CAUS_TONM4" })
  causTonm4: number;

  @Column("number", { name: "CAUS_TONM5" })
  causTonm5: number;

  @Column("number", { name: "CAUS_TONM6" })
  causTonm6: number;

  @Column("date", { name: "CAUS_FECRE", default: () => "sysdate" })
  causFecre: Date;

  @Column("number", { name: "CAUS_USUCRE", default: () => "0" })
  causUsucre: number;
}
