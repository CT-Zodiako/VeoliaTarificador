import { Column, Entity, Index } from "typeorm";

@Index("PKJSON_JSON", ["apsaId", "jsonAnno", "jsonMes", "jsonTipo200"], {
  unique: true,
})
@Entity("JSON_JSON")
export class JsonJson {
  @Column("number", { primary: true, name: "APSA_ID", scale: 0 })
  apsaId: number;

  @Column("number", { primary: true, name: "JSON_ANNO", scale: 0 })
  jsonAnno: number;

  @Column("number", { primary: true, name: "JSON_MES", scale: 0 })
  jsonMes: number;

  @Column("number", {
    primary: true,
    name: "JSON_TIPO200",
    scale: 0,
    default: () => "1",
  })
  jsonTipo200: number;

  @Column("clob", { name: "JSON_DOCUMENT" })
  jsonDocument: string;

  @Column("date", { name: "JSON_FECHA", default: () => "sysdate" })
  jsonFecha: Date;

  @Column("number", { name: "JSON_USUARIO", scale: 0 })
  jsonUsuario: number;
}
