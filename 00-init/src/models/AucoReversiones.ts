import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_REVERSIONES", ["reveId"], { unique: true })
@Entity("AUCO_REVERSIONES")
export class AucoReversiones {
  @Column("number", { primary: true, name: "REVE_ID" })
  reveId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "REVE_ANNO" })
  reveAnno: number;

  @Column("number", { name: "REVE_MES" })
  reveMes: number;

  @Column("varchar2", { name: "REVE_MOTIVO", length: 255 })
  reveMotivo: string;

  @Column("date", {
    name: "APSA_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  apsaFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
