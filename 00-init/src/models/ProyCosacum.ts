import { Column, Entity, Index } from "typeorm";

@Index("IXPROY_COSACUM01", ["apsaId", "codiCosto", "coacAnno", "coacMes"], {
  unique: true,
})
@Index("PROY_COSACUM", ["coacId"], { unique: true })
@Entity("PROY_COSACUM")
export class ProyCosacum {
  @Column("number", { primary: true, name: "COAC_ID", scale: 0 })
  coacId: number;

  @Column("number", { name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { name: "CODI_COSTO", scale: 0 })
  codiCosto: number;

  @Column("number", { name: "COAC_ANNO", scale: 0 })
  coacAnno: number;

  @Column("number", { name: "COAC_MES", scale: 0 })
  coacMes: number;

  @Column("number", { name: "COAC_VALOR", scale: 0 })
  coacValor: number;

  @Column("date", { name: "COAC_FECHA", default: () => "sysdate" })
  coacFecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
