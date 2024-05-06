import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_CARGUETERCERO", ["apsaId", "tercAnno", "tercMes"], {
  unique: true,
})
@Entity("AUCO_CARGUETERCERO")
export class AucoCarguetercero {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "TERC_ANNO", scale: 0 })
  tercAnno: number;

  @Column("number", { primary: true, name: "TERC_MES", scale: 0 })
  tercMes: number;

  @Column("float", { name: "TERC_CDF", precision: 126, default: () => "0" })
  tercCdf: number;

  @Column("float", { name: "TERC_CTL", precision: 126, default: () => "0" })
  tercCtl: number;

  @Column("float", {
    name: "TERC_INCENTIVOCDF",
    precision: 126,
    default: () => "0",
  })
  tercIncentivocdf: number;

  @Column("date", {
    name: "TERC_FECCREA",
    nullable: true,
    default: () => "SYSDATE",
  })
  tercFeccrea: Date | null;

  @Column("number", { name: "USUA_USUARIO", scale: 0 })
  usuaUsuario: number;
}
