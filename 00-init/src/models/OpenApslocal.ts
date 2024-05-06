import { Column, Entity, Index } from "typeorm";

@Index("PKOPEN_APSLOCAL", ["codaps", "codlocalidad"], { unique: true })
@Entity("OPEN_APSLOCAL")
export class OpenApslocal {
  @Column("number", { name: "MUNICIPIO", nullable: true })
  municipio: number | null;

  @Column("number", { primary: true, name: "CODAPS" })
  codaps: number;

  @Column("number", { primary: true, name: "CODLOCALIDAD" })
  codlocalidad: number;

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
