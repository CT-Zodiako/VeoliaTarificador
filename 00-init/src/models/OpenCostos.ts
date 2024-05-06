import { Column, Entity, Index } from "typeorm";

@Index("PKOPEN_COSTOS", ["codaps", "codcosto", "costo20010"], { unique: true })
@Entity("OPEN_COSTOS")
export class OpenCostos {
  @Column("number", { primary: true, name: "CODAPS" })
  codaps: number;

  @Column("number", { primary: true, name: "CODCOSTO" })
  codcosto: number;

  @Column("number", { primary: true, name: "COSTO20010" })
  costo20010: number;

  @Column("varchar2", { name: "NOMCOSTO", length: 30 })
  nomcosto: string;

  @Column("number", { name: "DIAINIMES" })
  diainimes: number;

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
