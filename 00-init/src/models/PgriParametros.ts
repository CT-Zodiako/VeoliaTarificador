import { Column, Entity, Index } from "typeorm";

@Index("PKPGRIPARAMETROS", ["apsaid", "pgrianno", "pgrimes", "pgrivariable"], {
  unique: true,
})
@Entity("PGRI_PARAMETROS")
export class PgriParametros {
  @Column("varchar2", {
    name: "PGRINGRESO",
    length: 20,
    default: () => "'MANUAL'",
  })
  pgringreso: string;

  @Column("number", { primary: true, name: "APSAID", scale: 0 })
  apsaid: number;

  @Column("number", { primary: true, name: "PGRIANNO", scale: 0 })
  pgrianno: number;

  @Column("number", { primary: true, name: "PGRIMES", scale: 0 })
  pgrimes: number;

  @Column("number", { primary: true, name: "PGRIVARIABLE", scale: 0 })
  pgrivariable: number;

  @Column("float", { name: "PGRIVALOR", precision: 126 })
  pgrivalor: number;

  @Column("number", { name: "PGRIFRECUENCIA", scale: 0 })
  pgrifrecuencia: number;

  @Column("date", { name: "PGRIFECHA", default: () => "sysdate" })
  pgrifecha: Date;

  @Column("number", { name: "PGRIUSUARIO", scale: 0 })
  pgriusuario: number;
}
