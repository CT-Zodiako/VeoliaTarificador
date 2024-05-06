import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_APSUSUARIOS", ["apsaId", "sisuId"], { unique: true })
@Entity("AUCO_APSUSUARIOS")
export class AucoApsusuarios {
  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "SISU_ID" })
  sisuId: number;

  @Column("number", { name: "APSI_ESTADO", default: () => "1" })
  apsiEstado: number;

  @Column("date", {
    name: "APSI_FECREA",
    nullable: true,
    default: () => "sysdate",
  })
  apsiFecrea: Date | null;
}
