import { Column, Entity } from "typeorm";

@Entity("AUGE_CONEXION")
export class AugeConexion {
  @Column("number", { name: "EMPR_EMPR", nullable: true })
  emprEmpr: number | null;

  @Column("number", { name: "CONE_TIPO", nullable: true })
  coneTipo: number | null;

  @Column("varchar2", { name: "CONE_BASEDATOS", nullable: true, length: 50 })
  coneBasedatos: string | null;

  @Column("varchar2", { name: "CONE_IPCONEXION", nullable: true, length: 50 })
  coneIpconexion: string | null;

  @Column("varchar2", { name: "CONE_PUERTO", nullable: true, length: 10 })
  conePuerto: string | null;

  @Column("varchar2", { name: "CONE_USUARIO", nullable: true, length: 255 })
  coneUsuario: string | null;

  @Column("varchar2", { name: "CONE_CLAVE", nullable: true, length: 255 })
  coneClave: string | null;
}
