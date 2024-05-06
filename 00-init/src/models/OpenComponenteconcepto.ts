import { Column, Entity, Index } from "typeorm";

@Index(
  "PKOPEN_COMPONENTECONCEPTO",
  ["codaps", "codlocalidad", "codcomponente", "codconcepto"],
  { unique: true }
)
@Entity("OPEN_COMPONENTECONCEPTO")
export class OpenComponenteconcepto {
  @Column("number", { name: "CODCONFGTAR", nullable: true })
  codconfgtar: number | null;

  @Column("number", { primary: true, name: "CODAPS" })
  codaps: number;

  @Column("number", { primary: true, name: "CODLOCALIDAD" })
  codlocalidad: number;

  @Column("number", { primary: true, name: "CODCOMPONENTE" })
  codcomponente: number;

  @Column("number", { primary: true, name: "CODCONCEPTO" })
  codconcepto: number;

  @Column("varchar2", { name: "NOMCOMPONENTE", length: 30 })
  nomcomponente: string;

  @Column("number", { name: "ESTADO", default: () => "1" })
  estado: number;

  @Column("date", {
    name: "FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  fechacreacion: Date | null;

  @Column("number", { name: "USUARIO" })
  usuario: number;
}
