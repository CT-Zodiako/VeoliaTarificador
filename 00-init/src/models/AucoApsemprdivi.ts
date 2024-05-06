import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AucoApsaseo } from "./AucoApsaseo";
import { AugeDivipoli } from "./AugeDivipoli";
import { AugeEmpresas } from "./AugeEmpresas";

@Index("PK_AUCO_APSEMPRDIVI", ["apsaId", "emprEmpr", "diviDivi"], {
  unique: true,
})
@Entity("AUCO_APSEMPRDIVI")
export class AucoApsemprdivi {
  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("number", { primary: true, name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("number", { name: "APEM_ESTADO", default: () => "1" })
  apemEstado: number;

  @Column("date", {
    name: "APEM_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  apemFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", {
    name: "APSA_UBICACION",
    nullable: true,
    default: () => "0",
  })
  apsaUbicacion: number | null;

  @ManyToOne(() => AucoApsaseo, (aucoApsaseo) => aucoApsaseo.aucoApsemprdivis)
  @JoinColumn([{ name: "APSA_ID", referencedColumnName: "apsaId" }])
  apsa: AucoApsaseo;

  @ManyToOne(
    () => AugeDivipoli,
    (augeDivipoli) => augeDivipoli.aucoApsemprdivis
  )
  @JoinColumn([{ name: "DIVI_DIVI", referencedColumnName: "diviDivi" }])
  diviDivi2: AugeDivipoli;

  @ManyToOne(
    () => AugeEmpresas,
    (augeEmpresas) => augeEmpresas.aucoApsemprdivis
  )
  @JoinColumn([{ name: "EMPR_EMPR", referencedColumnName: "emprEmpr" }])
  emprEmpr2: AugeEmpresas;
}
