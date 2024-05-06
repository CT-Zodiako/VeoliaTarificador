import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_PRODUCTIVIDAD", ["apsaId", "prodAnno", "prodMes"], {
  unique: true,
})
@Entity("AUCO_PRODUCTIVIDAD")
export class AucoProductividad {
  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "PROD_ANNO" })
  prodAnno: number;

  @Column("number", { primary: true, name: "PROD_MES" })
  prodMes: number;

  @Column("float", { name: "PROD_VALOR", precision: 126 })
  prodValor: number;

  @Column("date", {
    name: "PROD_FECCREA",
    nullable: true,
    default: () => "sysdate",
  })
  prodFeccrea: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
