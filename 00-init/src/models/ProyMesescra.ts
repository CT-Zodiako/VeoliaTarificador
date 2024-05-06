import { Column, Entity, Index } from "typeorm";

@Index("PK_PROY_MESESCRA", ["mecrId"], { unique: true })
@Entity("PROY_MESESCRA")
export class ProyMesescra {
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
