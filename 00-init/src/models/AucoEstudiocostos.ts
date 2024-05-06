import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_ESTUDIOCOSTOS", ["escoId"], { unique: true })
@Index("UK_AUCO_ESTUDIOCOSTOS_APSA_ID", ["apsaId"], { unique: true })
@Entity("AUCO_ESTUDIOCOSTOS")
export class AucoEstudiocostos {
  @Column("number", { primary: true, name: "ESCO_ID" })
  escoId: number;

  @Column("number", { name: "APSA_ID", unique: true })
  apsaId: number;

  @Column("float", { name: "ESCO_VLRPODA", precision: 126, default: () => "0" })
  escoVlrpoda: number;

  @Column("date", {
    name: "ESCO_FECCRE",
    nullable: true,
    default: () => "sysdate",
  })
  escoFeccre: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
