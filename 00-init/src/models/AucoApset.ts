import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AucoEstaciont } from "./AucoEstaciont";

@Index("PK_AUCO_APSEST", ["apsaId", "estaId"], { unique: true })
@Entity("AUCO_APSET")
export class AucoApset {
  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "ESTA_ID" })
  estaId: number;

  @Column("number", { name: "APET_ESTADO", default: () => "1" })
  apetEstado: number;

  @Column("float", { name: "APET_DISTVIAPAV", precision: 126 })
  apetDistviapav: number;

  @Column("float", { name: "APET_DISTVIADESPAV", precision: 126 })
  apetDistviadespav: number;

  @Column("float", { name: "APET_DISVIATOTAL", precision: 126 })
  apetDisviatotal: number;

  @Column("date", {
    name: "APET_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  apetFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @ManyToOne(() => AucoEstaciont, (aucoEstaciont) => aucoEstaciont.aucoApsets)
  @JoinColumn([{ name: "ESTA_ID", referencedColumnName: "estaId" }])
  esta: AucoEstaciont;
}
