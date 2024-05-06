import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AucoApsaseo } from "./AucoApsaseo";

@Index("IX_AUCO_APSDESCOST_01", ["apsaId", "paraCosto20010"], {})
@Index("PK_AUCO_APSDESCOST", ["descId"], { unique: true })
@Entity("AUCO_APSDESCOST")
export class AucoApsdescost {
  @Column("number", { primary: true, name: "DESC_ID" })
  descId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "PARA_COSTO20010" })
  paraCosto20010: number;

  @Column("float", { name: "DESC_VALOR", precision: 126 })
  descValor: number;

  @Column("number", { name: "DESC_ESTADO", default: () => "1" })
  descEstado: number;

  @Column("date", {
    name: "DESC_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  descFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @ManyToOne(() => AucoApsaseo, (aucoApsaseo) => aucoApsaseo.aucoApsdescosts)
  @JoinColumn([{ name: "APSA_ID", referencedColumnName: "apsaId" }])
  apsa: AucoApsaseo;
}
