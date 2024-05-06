import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AugeEmpresas } from "./AugeEmpresas";

@Index("PK_AUCO_CERTOPERATIVO", ["operOper"], { unique: true })
@Index("UK_AUCO_CERTOPERATIVO", ["emprEmpr", "operAnno", "operMes"], {
  unique: true,
})
@Entity("AUCO_CERTOPERATIVO")
export class AucoCertoperativo {
  @Column("number", { primary: true, name: "OPER_OPER" })
  operOper: number;

  @Column("number", { name: "EMPR_EMPR", unique: true })
  emprEmpr: number;

  @Column("number", { name: "OPER_ANNO", unique: true })
  operAnno: number;

  @Column("number", { name: "OPER_MES", unique: true })
  operMes: number;

  @Column("float", {
    name: "OPER_QRTZ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operQrtz: number | null;

  @Column("float", {
    name: "OPER_QRTJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operQrtj: number | null;

  @Column("float", {
    name: "OPER_QRSJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operQrsj: number | null;

  @Column("float", {
    name: "OPER_QBL",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operQbl: number | null;

  @Column("float", {
    name: "OPER_QLU",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operQlu: number | null;

  @Column("float", {
    name: "OPER_QNA",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operQna: number | null;

  @Column("float", {
    name: "OPER_LBLJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operLblj: number | null;

  @Column("float", {
    name: "OPER_M2CCJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operM2Ccj: number | null;

  @Column("float", {
    name: "OPER_M2LAVJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operM2Lavj: number | null;

  @Column("float", {
    name: "OPER_TIJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operTij: number | null;

  @Column("float", {
    name: "OPER_KLPJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operKlpj: number | null;

  @Column("float", {
    name: "OPER_TMJ",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operTmj: number | null;

  @Column("float", {
    name: "OPER_T",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operT: number | null;

  @Column("float", {
    name: "OPER_QR",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  operQr: number | null;

  @Column("date", {
    name: "OPER_FECHA",
    nullable: true,
    default: () => "sysdate",
  })
  operFecha: Date | null;

  @Column("number", { name: "USUA_USUA", nullable: true, default: () => "0" })
  usuaUsua: number | null;

  @ManyToOne(
    () => AugeEmpresas,
    (augeEmpresas) => augeEmpresas.aucoCertoperativos
  )
  @JoinColumn([{ name: "EMPR_EMPR", referencedColumnName: "emprEmpr" }])
  emprEmpr2: AugeEmpresas;
}
