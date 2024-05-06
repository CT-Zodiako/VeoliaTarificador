import { Column, Entity, Index } from "typeorm";

@Index("PKAUCO_APSNUSD", ["apsaId", "nusdId"], { unique: true })
@Entity("AUCO_APSNUSD")
export class AucoApsnusd {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "NUSD_ID", scale: 0 })
  nusdId: number;

  @Column("float", {
    name: "NUSD_CENTROIDE",
    precision: 126,
    default: () => "0",
  })
  nusdCentroide: number;
}
