import { Column, Entity, Index } from "typeorm";

@Index(
  "PKOPEN_TARIFACONCEPTO",
  [
    "codaps",
    "codlocalidad",
    "coduso",
    "codtarifa20012",
    "codtipfac20008",
    "codtarimetodo",
    "codusopen",
    "codestopen",
    "codcomponente",
    "codcoceptopen",
    "tarianno",
    "tarimes",
  ],
  { unique: true }
)
@Entity("OPEN_TARIFACONCEPTO")
export class OpenTarifaconcepto {
  @Column("number", { name: "CODCONFGTAR", nullable: true })
  codconfgtar: number | null;

  @Column("number", { name: "MUNICIPIO", nullable: true })
  municipio: number | null;

  @Column("number", { primary: true, name: "CODAPS" })
  codaps: number;

  @Column("number", { primary: true, name: "CODLOCALIDAD" })
  codlocalidad: number;

  @Column("number", { primary: true, name: "CODUSO" })
  coduso: number;

  @Column("number", { primary: true, name: "CODTARIFA20012" })
  codtarifa20012: number;

  @Column("number", { primary: true, name: "CODTIPFAC20008" })
  codtipfac20008: number;

  @Column("number", { primary: true, name: "CODTARIMETODO" })
  codtarimetodo: number;

  @Column("number", { primary: true, name: "CODUSOPEN" })
  codusopen: number;

  @Column("number", { primary: true, name: "CODESTOPEN" })
  codestopen: number;

  @Column("number", { primary: true, name: "CODCOMPONENTE" })
  codcomponente: number;

  @Column("number", { primary: true, name: "CODCOCEPTOPEN" })
  codcoceptopen: number;

  @Column("number", { primary: true, name: "TARIANNO" })
  tarianno: number;

  @Column("number", { primary: true, name: "TARIMES" })
  tarimes: number;

  @Column("varchar2", { name: "NOMCOCEPTOPEN", length: 30 })
  nomcoceptopen: string;

  @Column("number", { name: "PORCSUBCONT" })
  porcsubcont: number;

  @Column("number", { name: "CODGRUPCONCEPTO" })
  codgrupconcepto: number;

  @Column("number", { name: "VALORPLENO" })
  valorpleno: number;

  @Column("date", {
    name: "FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  fechacreacion: Date | null;

  @Column("number", { name: "USUARIO" })
  usuario: number;
}
