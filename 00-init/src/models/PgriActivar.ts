import { Column, Entity, Index } from "typeorm";

@Index("PKPGRI_ACTIVAR", ["apsaid"], { unique: true })
@Entity("PGRI_ACTIVAR")
export class PgriActivar {
  @Column("number", { primary: true, name: "APSAID", scale: 0 })
  apsaid: number;

  @Column("number", { name: "ACTESTADO", scale: 0, default: () => "0" })
  actestado: number;
}
