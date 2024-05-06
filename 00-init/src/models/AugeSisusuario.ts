import { Column, Entity, Index } from "typeorm";

@Index("PK_AUGE_SISUSUARIO", ["sisuId"], { unique: true })
@Index("UN_AUGE_SISUSUARIO", ["sisuCorreo"], { unique: true })
@Entity("AUGE_SISUSUARIO")
export class AugeSisusuario {
  @Column("number", { primary: true, name: "SISU_ID" })
  sisuId: number;

  @Column("varchar2", { name: "SISU_NOMBRES", length: 150 })
  sisuNombres: string;

  @Column("varchar2", { name: "SISU_APELLIDOS", length: 150 })
  sisuApellidos: string;

  @Column("varchar2", { name: "SISU_CORREO", unique: true, length: 50 })
  sisuCorreo: string;

  @Column("varchar2", { name: "SISU_PASS", length: 100 })
  sisuPass: string;

  @Column("number", { name: "SISU_ESTADO", scale: 0, default: () => "1" })
  sisuEstado: number;
}
