import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_PRODUCTIVIDAD", ["APSA_ID", "PROD_ANNO", "PROD_MES"], {
  unique: true,
})
@Entity("AUCO_PRODUCTIVIDAD")
export class ProductividadEntity {
  @Column("number", { primary: true, name: "APSA_ID" })
  APSA_ID: number;

  @Column("number", { primary: true, name: "PROD_ANNO" })
  PROD_ANNO: number;

  @Column("number", { primary: true, name: "PROD_MES" })
  PROD_MES: number;

  @Column("float", { name: "PROD_VALOR", precision: 126 })
  PROD_VALOR: number;

  @Column("date", {
    name: "PROD_FECCREA",
    nullable: true,
    default: () => "sysdate",
  })
  PROD_FECCREA: Date | null;

  @Column("number", { name: "USUA_USUA" })
  USUA_USUA: number;
}
