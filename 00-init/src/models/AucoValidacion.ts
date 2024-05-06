import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_VALIDACION", ["valiId"], { unique: true })
@Entity("AUCO_VALIDACION")
export class AucoValidacion {
  @Column("number", { primary: true, name: "VALI_ID" })
  valiId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { name: "VALI_ANNO" })
  valiAnno: number;

  @Column("number", { name: "VALI_MES" })
  valiMes: number;

  @Column("varchar2", { name: "VALI_GRUPO", length: 50 })
  valiGrupo: string;

  @Column("varchar2", { name: "VALI_VAR", length: 50 })
  valiVar: string;

  @Column("float", { name: "VALI_VALOR", precision: 126, default: () => "0" })
  valiValor: number;

  @Column("date", {
    name: "VALI_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  valiFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
