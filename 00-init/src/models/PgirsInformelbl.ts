import { Column, Entity, Index } from "typeorm";

@Index("PKPGIRS_INFORMELBL", ["apsid", "periodo"], { unique: true })
@Entity("PGIRS_INFORMELBL")
export class PgirsInformelbl {
  @Column("number", { primary: true, name: "APSID", scale: 0 })
  apsid: number;

  @Column("number", { primary: true, name: "PERIODO", scale: 0 })
  periodo: number;

  @Column("number", { name: "SEMESTRE", scale: 0 })
  semestre: number;

  @Column("float", { name: "BARRIDO", precision: 126, default: () => "0" })
  barrido: number;

  @Column("float", { name: "BARRIDOPGIRS", precision: 126, default: () => "0" })
  barridopgirs: number;

  @Column("varchar2", {
    name: "BARRIDOCOLOR",
    length: 10,
    default: () => "'ROJO'",
  })
  barridocolor: string;
}
