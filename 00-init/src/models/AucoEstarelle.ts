import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { AucoCostoset } from "./AucoCostoset";
import { AucoEstaciont } from "./AucoEstaciont";

@Index("PK_AUCO_APSET", ["rellId", "estaId"], { unique: true })
@Entity("AUCO_ESTARELLE")
export class AucoEstarelle {
  @Column("number", { primary: true, name: "RELL_ID" })
  rellId: number;

  @Column("number", { primary: true, name: "ESTA_ID" })
  estaId: number;

  @Column("float", { name: "APER_DISTVIAPAV", precision: 126 })
  aperDistviapav: number;

  @Column("float", { name: "APER_DISTVIADESPAV", precision: 126 })
  aperDistviadespav: number;

  @Column("float", { name: "APER_DISVIATOTAL", precision: 126 })
  aperDisviatotal: number;

  @Column("number", { name: "APER_ESTADO", default: () => "1" })
  aperEstado: number;

  @Column("date", {
    name: "APER_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  aperFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @OneToMany(() => AucoCostoset, (aucoCostoset) => aucoCostoset.aucoEstarelle)
  aucoCostosets: AucoCostoset[];

  @ManyToOne(
    () => AucoEstaciont,
    (aucoEstaciont) => aucoEstaciont.aucoEstarelles
  )
  @JoinColumn([{ name: "ESTA_ID", referencedColumnName: "estaId" }])
  esta: AucoEstaciont;
}
