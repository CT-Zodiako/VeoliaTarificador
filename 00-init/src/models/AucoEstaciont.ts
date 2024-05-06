import { Column, Entity, Index, OneToMany } from "typeorm";
import { AucoApset } from "./AucoApset";
import { AucoEstarelle } from "./AucoEstarelle";

@Index("PK_AUCO_ESTACIONT", ["estaId"], { unique: true })
@Entity("AUCO_ESTACIONT")
export class AucoEstaciont {
  @Column("number", { primary: true, name: "ESTA_ID" })
  estaId: number;

  @Column("varchar2", { name: "ESTA_NOMESTACIONT", length: 20 })
  estaNomestaciont: string;

  @Column("clob", { name: "ESTA_DESCRIPCION" })
  estaDescripcion: string;

  @Column("number", { name: "ESTA_ESTADO", default: () => "1" })
  estaEstado: number;

  @Column("number", { name: "ESTA_PROPIO", default: () => "1" })
  estaPropio: number;

  @Column("date", {
    name: "ESTA_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  estaFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @OneToMany(() => AucoApset, (aucoApset) => aucoApset.esta)
  aucoApsets: AucoApset[];

  @OneToMany(() => AucoEstarelle, (aucoEstarelle) => aucoEstarelle.esta)
  aucoEstarelles: AucoEstarelle[];
}
