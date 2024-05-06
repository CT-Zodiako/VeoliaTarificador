import { Column, Entity, Index } from "typeorm";

@Index("PK_TAR_MESESCRA", ["mecrId"], { unique: true })
@Entity("AUCO_MESESCRA")
export class AucoMesescra {
  @Column("number", { primary: true, name: "MECR_ID" })
  mecrId: number;

  @Column("varchar2", { name: "MECR_NOMBRE", length: 50 })
  mecrNombre: string;

  @Column("number", { name: "MECR_SEMESTRE" })
  mecrSemestre: number;

  @Column("number", { name: "MECR_TRIMESTRE" })
  mecrTrimestre: number;

  @Column("date", {
    name: "MECR_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  mecrFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @Column("number", { name: "MECR_SEMESREAL" })
  mecrSemesreal: number;
}
