import { Column, Entity, Index } from "typeorm";

@Index("AUGE_CONSTANTES_PKEY", ["consGrupo", "consIdentificador"], {
  unique: true,
})
@Entity("AUGE_CONSTANTES")
export class AugeConstantes {
  @Column("varchar2", { primary: true, name: "CONS_GRUPO", length: 5 })
  consGrupo: string;

  @Column("varchar2", { primary: true, name: "CONS_IDENTIFICADOR", length: 18 })
  consIdentificador: string;

  @Column("varchar2", { name: "CONS_VALOR", length: 255 })
  consValor: string;

  @Column("varchar2", { name: "CONS_DESCRIPCION", nullable: true, length: 255 })
  consDescripcion: string | null;
}
