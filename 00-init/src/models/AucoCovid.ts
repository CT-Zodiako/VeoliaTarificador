import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_COVID", ["apsaId", "coviAnno", "coviMes"], { unique: true })
@Entity("AUCO_COVID")
export class AucoCovid {
  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "COVI_ANNO" })
  coviAnno: number;

  @Column("number", { primary: true, name: "COVI_MES" })
  coviMes: number;

  @Column("float", { name: "COVI_VALOR", precision: 126 })
  coviValor: number;

  @Column("date", {
    name: "COVI_FECCREA",
    nullable: true,
    default: () => "sysdate",
  })
  coviFeccrea: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
