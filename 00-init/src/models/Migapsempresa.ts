import { Column, Entity } from "typeorm";

@Entity("MIGAPSEMPRESA")
export class Migapsempresa {
  @Column("number", { name: "CODAPS", nullable: true })
  codaps: number | null;

  @Column("varchar2", { name: "NOMAPS", nullable: true, length: 150 })
  nomaps: string | null;

  @Column("varchar2", { name: "APSREAL", nullable: true, length: 150 })
  apsreal: string | null;

  @Column("number", { name: "CODMPIO", nullable: true })
  codmpio: number | null;

  @Column("varchar2", { name: "MPIO", nullable: true, length: 50 })
  mpio: string | null;

  @Column("number", { name: "CODEMPRE", nullable: true })
  codempre: number | null;

  @Column("varchar2", { name: "NOMEMPRE", nullable: true, length: 150 })
  nomempre: string | null;

  @Column("varchar2", { name: "DUENNO", nullable: true, length: 150 })
  duenno: string | null;
}
