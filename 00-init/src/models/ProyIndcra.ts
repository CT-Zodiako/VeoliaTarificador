import { Column, Entity, Index } from "typeorm";

@Index("PK_PROY_INDCRA", ["proyid", "indid", "indanno", "indmes"], {
  unique: true,
})
@Entity("PROY_INDCRA")
export class ProyIndcra {
  @Column("number", { primary: true, name: "PROYID" })
  proyid: number;

  @Column("number", { primary: true, name: "INDID" })
  indid: number;

  @Column("number", { primary: true, name: "INDANNO" })
  indanno: number;

  @Column("number", { primary: true, name: "INDMES" })
  indmes: number;

  @Column("number", { name: "INDESTADO", default: () => "1" })
  indestado: number;

  @Column("float", { name: "INDVALOR", precision: 126 })
  indvalor: number;

  @Column("date", {
    name: "INDFECHA",
    nullable: true,
    default: () => "sysdate",
  })
  indfecha: Date | null;

  @Column("number", { name: "INDUSUA" })
  indusua: number;
}
