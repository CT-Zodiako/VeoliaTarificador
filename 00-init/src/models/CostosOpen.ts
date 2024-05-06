import { Column, Entity, Index } from "typeorm";

@Index("PKcostos_open", ["codaps", "coDcosto", "paracosto20010"], {
  unique: true,
})
@Entity("costos_open")
export class CostosOpen {
  @Column("number", { primary: true, name: "CODAPS" })
  codaps: number;

  @Column("number", { primary: true, name: "CODcosto" })
  coDcosto: number;

  @Column("number", { primary: true, name: "paracosto20010" })
  paracosto20010: number;

  @Column("number", { name: "diainicialmes" })
  diainicialmes: number;

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
