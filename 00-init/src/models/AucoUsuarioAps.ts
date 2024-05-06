import { Column, Entity, Index } from "typeorm";

@Index("PK_AUCO_USUARIO_APS", ["nombre", "aps"], { unique: true })
@Entity("AUCO_USUARIO_APS")
export class AucoUsuarioAps {
  @Column("varchar2", { primary: true, name: "NOMBRE", length: 30 })
  nombre: string;

  @Column("number", { primary: true, name: "APS" })
  aps: number;
}
