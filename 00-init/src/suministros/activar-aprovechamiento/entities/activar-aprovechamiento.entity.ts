import { Column, Entity, Index } from "typeorm";

@Index("PKAPROV_ACTIVAR", ["APSID", "APROANNO", "APROMES"], { unique: true })
@Entity("APROV_ACTIVAR")
export class aprovechamientoEntity {
  @Column("number", { primary: true, name: "APSID", scale: 0 })
  APSID: number;

  @Column("number", { primary: true, name: "APROANNO", scale: 0 })
  APROANNO: number;

  @Column("number", { primary: true, name: "APROMES", scale: 0 })
  APROMES: number;

  @Column("number", { name: "APROACTIVAR", scale: 0, default: () => "0" })
  APROACTIVAR: number;

  @Column("date", { name: "APROFECHA", default: () => "sysdate" })
  APROFECHA: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  USUARIO: number;
}
