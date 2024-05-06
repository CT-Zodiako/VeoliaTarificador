import { Column, Entity, Index } from "typeorm";

@Index(
  "PKOPEN_TARIFAMETODO",
  ["codaps", "codlocalidad", "codtipotar20012", "codmetodo"],
  { unique: true }
)
@Entity("OPEN_TARIFAMETODO")
export class OpenTarifametodo {
  @Column("number", { primary: true, name: "CODAPS" })
  codaps: number;

  @Column("number", { primary: true, name: "CODLOCALIDAD" })
  codlocalidad: number;

  @Column("number", { primary: true, name: "CODTIPOTAR20012" })
  codtipotar20012: number;

  @Column("number", { primary: true, name: "CODMETODO" })
  codmetodo: number;

  @Column("varchar2", { name: "NOMMETODO", length: 30 })
  nommetodo: string;

  @Column("number", { name: "CODGRUPCONCE" })
  codgrupconce: number;

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
