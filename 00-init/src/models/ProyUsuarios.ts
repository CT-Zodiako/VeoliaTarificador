import { Column, Entity, Index } from "typeorm";

@Index(
  "PKPROY_USUARIOS",
  [
    "proyId",
    "codAps",
    "anno",
    "semestre",
    "coduso",
    "codfactor",
    "codtipopred",
  ],
  { unique: true }
)
@Entity("PROY_USUARIOS")
export class ProyUsuarios {
  @Column("number", { primary: true, name: "PROY_ID", scale: 0 })
  proyId: number;

  @Column("number", { primary: true, name: "COD_APS", scale: 0 })
  codAps: number;

  @Column("number", { primary: true, name: "ANNO", scale: 0 })
  anno: number;

  @Column("number", { primary: true, name: "SEMESTRE", scale: 0 })
  semestre: number;

  @Column("number", { primary: true, name: "CODUSO", scale: 0 })
  coduso: number;

  @Column("varchar2", { name: "NOMCLASEUSO", nullable: true, length: 100 })
  nomclaseuso: string | null;

  @Column("number", { primary: true, name: "CODFACTOR", scale: 0 })
  codfactor: number;

  @Column("float", { name: "VALORFACTOR", precision: 126 })
  valorfactor: number;

  @Column("number", { primary: true, name: "CODTIPOPRED", scale: 0 })
  codtipopred: number;

  @Column("varchar2", { name: "NOMTIPOPRED", nullable: true, length: 100 })
  nomtipopred: string | null;

  @Column("float", { name: "CANTIDAD", precision: 126 })
  cantidad: number;

  @Column("float", { name: "TONELADAS", precision: 126 })
  toneladas: number;

  @Column("date", { name: "FECHACREA", default: () => "sysdate" })
  fechacrea: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
