import { Column, Entity, Index, OneToMany } from "typeorm";

@Index("PK_AUCO_APSASEO", ["apsaId"], { unique: true })
@Entity("AUCO_APSASEO")
export class AucoApsaseo {
  @Column("varchar2", { name: "APSA_NUAP", nullable: true, length: 30 })
  apsaNuap: string | null;

  @Column("varchar2", { name: "APSA_IDSUI", nullable: true, length: 100 })
  apsaIdsui: string | null;

  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("varchar2", { name: "APSA_NOMAPS", length: 30 })
  apsaNomaps: string;

  @Column("number", { name: "APSA_ESTADO", default: () => "1" })
  apsaEstado: number;

  @Column("number", { name: "APSA_PROPIO", default: () => "1" })
  apsaPropio: number;

  @Column("date", {
    name: "APSA_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  apsaFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", { name: "EMPR_HOMOLOGACION", nullable: true })
  emprHomologacion: number | null;

  @Column("number", { name: "APSA_EXISTEET", default: () => "0" })
  apsaExisteet: number;

  @Column("number", { name: "APSA_TIPOPROGRESIV", nullable: true })
  apsaTipoprogresiv: number | null;

  @Column("number", { name: "APSA_RESOLUCION", nullable: true })
  apsaResolucion: number | null;

  @Column("number", { name: "APSA_VIAT", nullable: true, scale: 0 })
  apsaViat: number | null;

  @Column("number", {
    name: "APSA_SOLORELL",
    nullable: true,
    default: () => "0",
  })
  apsaSolorell: number | null;

  @Column("varchar2", {
    name: "APSA_DESCRIPCION",
    length: 200,
    default: () => "0",
  })
  apsaDescripcion: string;


}
