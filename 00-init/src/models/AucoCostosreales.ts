import { Column, Entity, Index } from "typeorm";

@Index("PKAUCO_COSTOSREALES", ["apsid", "annocosto", "mescosto", "codcosto"], {
  unique: true,
})
@Entity("AUCO_COSTOSREALES")
export class AucoCostosreales {
  @Column("number", { primary: true, name: "APSID", scale: 0 })
  apsid: number;

  @Column("number", { primary: true, name: "ANNOCOSTO", scale: 0 })
  annocosto: number;

  @Column("number", { primary: true, name: "MESCOSTO", scale: 0 })
  mescosto: number;

  @Column("number", { primary: true, name: "CODCOSTO", scale: 0 })
  codcosto: number;

  @Column("float", { name: "VALORCOSTO", precision: 126 })
  valorcosto: number;

  @Column("date", { name: "FECHACREACION", default: () => "sysdate" })
  fechacreacion: Date;
}
