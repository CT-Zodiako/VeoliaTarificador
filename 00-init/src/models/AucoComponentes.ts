import { Column, Entity, Index } from "typeorm";

@Index("PKAUCO_COMPONENTES", ["codcomponente"], { unique: true })
@Entity("AUCO_COMPONENTES")
export class AucoComponentes {
  @Column("number", { primary: true, name: "CODCOMPONENTE" })
  codcomponente: number;

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
