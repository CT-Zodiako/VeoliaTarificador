import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { AucoRellenos } from "./AucoRellenos";
import { AucoCostapsrelladd } from "./AucoCostapsrelladd";
import { AucoInfoapsrelleno } from "./AucoInfoapsrelleno";

@Index("PK_AUCO_APSRELLENO", ["apsaId", "rellId"], { unique: true })
@Entity("AUCO_APSRELLENO")
export class AucoApsrelleno {
  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "RELL_ID" })
  rellId: number;

  @Column("number", { name: "APRE_ESTADO", default: () => "1" })
  apreEstado: number;

  @Column("float", { name: "APRE_DISTVIAPAV", precision: 126 })
  apreDistviapav: number;

  @Column("float", { name: "APRE_DISTVIADESPAV", precision: 126 })
  apreDistviadespav: number;

  @Column("float", { name: "APRE_DISVIATOTAL", precision: 126 })
  apreDisviatotal: number;

  @Column("float", { name: "APRE_DELTAT", precision: 126, default: () => "0" })
  apreDeltat: number;

  @Column("number", { name: "APRE_PROPIO" })
  aprePropio: number;

  @ManyToOne(() => AucoRellenos, (aucoRellenos) => aucoRellenos.aucoApsrellenos)
  @JoinColumn([{ name: "RELL_ID", referencedColumnName: "rellId" }])
  rell: AucoRellenos;

  @OneToMany(
    () => AucoCostapsrelladd,
    (aucoCostapsrelladd) => aucoCostapsrelladd.aucoApsrelleno
  )
  aucoCostapsrelladds: AucoCostapsrelladd[];

  @OneToMany(
    () => AucoInfoapsrelleno,
    (aucoInfoapsrelleno) => aucoInfoapsrelleno.aucoApsrelleno
  )
  aucoInfoapsrellenos: AucoInfoapsrelleno[];
}
