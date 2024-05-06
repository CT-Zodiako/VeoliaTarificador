import { Column, Entity, Index } from "typeorm";

@Index("PKAPROV_ACTIVAR", ["apsid", "aproanno", "apromes"], { unique: true })
@Entity("APROV_ACTIVAR")
export class AprovActivar {
  @Column("number", { primary: true, name: "APSID", scale: 0 })
  apsid: number;

  @Column("number", { primary: true, name: "APROANNO", scale: 0 })
  aproanno: number;

  @Column("number", { primary: true, name: "APROMES", scale: 0 })
  apromes: number;

  @Column("number", { name: "APROACTIVAR", scale: 0, default: () => "0" })
  aproactivar: number;

  @Column("date", { name: "APROFECHA", default: () => "sysdate" })
  aprofecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
