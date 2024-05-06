import { Column, Entity, Index } from "typeorm";

@Index("PKAUCO_APSEMPRNUAPI", ["apsaid", "emprempr"], { unique: true })
@Entity("AUCO_APSEMPRNUAP")
export class AucoApsemprnuap {
  @Column("number", { primary: true, name: "APSAID" })
  apsaid: number;

  @Column("number", { primary: true, name: "EMPREMPR" })
  emprempr: number;

  @Column("number", { name: "APEM_ESTADO", default: () => "1" })
  apemEstado: number;

  @Column("varchar2", { name: "APEM_NUAP", length: 30, default: () => "'0'" })
  apemNuap: string;

  @Column("date", {
    name: "APEM_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  apemFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;
}
