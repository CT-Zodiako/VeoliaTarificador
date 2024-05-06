import { Column, Entity, Index } from "typeorm";

@Index("AUGE_DEADTOKEN_PK", ["dtknId"], { unique: true })
@Entity("AUGE_DEADTOKEN")
export class AugeDeadtoken {
  @Column("number", { primary: true, name: "DTKN_ID" })
  dtknId: number;

  @Column("varchar2", { name: "DTKN_TOKEN", length: 200 })
  dtknToken: string;

  @Column("number", { name: "SISU_ID" })
  sisuId: number;

  @Column("date", { name: "DTKN_FECRE", default: () => "sysdate" })
  dtknFecre: Date;
}
