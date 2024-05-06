import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AucoRescomercial } from "./AucoRescomercial";

@Index("AUCO_CARGUECOMERCIAL_PK", ["ccomId"], { unique: true })
@Entity("AUCO_CARGUECOMERCIAL")
export class AucoCarguecomercial {
  @Column("number", { primary: true, name: "CCOM_ID" })
  ccomId: number;

  @Column("number", { name: "CCOM_CODAPS" })
  ccomCodaps: number;

  @Column("varchar2", { name: "CCOM_APSNOM", length: 150 })
  ccomApsnom: string;

  @Column("number", { name: "CCOM_ANNO" })
  ccomAnno: number;

  @Column("number", { name: "CCOM_MES" })
  ccomMes: number;

  @Column("number", { name: "CCOM_CU" })
  ccomCu: number;

  @Column("varchar2", { name: "CCOM_NOMCU", length: 100 })
  ccomNomcu: string;

  @Column("number", { name: "CCOM_CODFACTOR" })
  ccomCodfactor: number;

  @Column("number", { name: "CCOM_CODTIPO" })
  ccomCodtipo: number;

  @Column("number", { name: "CCOM_TIPO" })
  ccomTipo: number;

  @Column("varchar2", { name: "CCOM_NOMTIPO", length: 150 })
  ccomNomtipo: string;

  @Column("number", { name: "CCOM_CANTIDAD" })
  ccomCantidad: number;

  @Column("number", { name: "CCOM_TONELADAS" })
  ccomToneladas: number;

  @Column("date", { name: "CCOM_FECRE", default: () => "sysdate" })
  ccomFecre: Date;

  @Column("number", { name: "CCOM_USUCRE", default: () => "0" })
  ccomUsucre: number;

  @ManyToOne(
    () => AucoRescomercial,
    (aucoRescomercial) => aucoRescomercial.aucoCarguecomercials
  )
  @JoinColumn([{ name: "RCOM_ID", referencedColumnName: "rcomId" }])
  rcom: AucoRescomercial;
}
