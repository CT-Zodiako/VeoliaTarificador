import { Column, Entity, Index } from "typeorm";

@Index(
  "PKUSOS_OPEN",
  ["codaps", "coduso", "codestrato", "claseuso", "factprod"],
  { unique: true }
)
@Entity("USOS_OPEN")
export class UsosOpen {
  @Column("number", { primary: true, name: "CODAPS" })
  codaps: number;

  @Column("number", { primary: true, name: "CODUSO" })
  coduso: number;

  @Column("number", { primary: true, name: "CODESTRATO" })
  codestrato: number;

  @Column("number", { primary: true, name: "CLASEUSO" })
  claseuso: number;

  @Column("number", { primary: true, name: "FACTPROD" })
  factprod: number;

  @Column("varchar2", { name: "NOMUSO", length: 30 })
  nomuso: string;

  @Column("varchar2", { name: "NOMESTRAT0", length: 30 })
  nomestrat0: string;

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
