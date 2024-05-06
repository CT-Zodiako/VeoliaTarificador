import { Column, Entity, Index } from "typeorm";

@Index(
  "PKOPEN_INFCONVERTIDA",
  [
    "codaps",
    "coduso",
    "codtarifa20012",
    "codtipfac20008",
    "factproducc",
    "tarianno",
    "tarimes",
    "codcomponente",
  ],
  { unique: true }
)
@Entity("OPEN_INFCONVERTIDA")
export class OpenInfconvertida {
  @Column("number", { primary: true, name: "CODAPS" })
  codaps: number;

  @Column("number", { primary: true, name: "CODUSO" })
  coduso: number;

  @Column("number", { primary: true, name: "CODTARIFA20012" })
  codtarifa20012: number;

  @Column("number", { primary: true, name: "CODTIPFAC20008" })
  codtipfac20008: number;

  @Column("number", { primary: true, name: "FACTPRODUCC" })
  factproducc: number;

  @Column("number", { primary: true, name: "TARIANNO" })
  tarianno: number;

  @Column("number", { primary: true, name: "TARIMES" })
  tarimes: number;

  @Column("number", { name: "PORCSUBCONT" })
  porcsubcont: number;

  @Column("number", { primary: true, name: "CODCOMPONENTE" })
  codcomponente: number;

  @Column("number", { name: "VALOR" })
  valor: number;

  @Column("date", {
    name: "FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  fechacreacion: Date | null;

  @Column("number", { name: "USUARIO" })
  usuario: number;
}
