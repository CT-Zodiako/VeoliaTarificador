import { Column, Entity, Index } from "typeorm";

@Index("AUGE_CRECIMIENTOVBLES_PK", ["apsaId", "proyid"], { unique: true })
@Entity("PROY_CRECIMIENTO_VBLES")
export class ProyCrecimientoVbles {
  @Column("number", { primary: true, name: "APSA_ID" })
  apsaId: number;

  @Column("number", { primary: true, name: "PROYID" })
  proyid: number;

  @Column("varchar2", { name: "ID_ARCHIVO", length: 100 })
  idArchivo: string;

  @Column("varchar2", { name: "LISTA_HOJAS", length: 100 })
  listaHojas: string;

  @Column("date", { name: "FECRE", nullable: true, default: () => "SYSDATE" })
  fecre: Date | null;

  @Column("number", { name: "USUARIO", nullable: true })
  usuario: number | null;
}
