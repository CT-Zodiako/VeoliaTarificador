import { Column, Entity, Index } from "typeorm";

@Index("PKSUI_ESTADORESUL", ["apsid", "suifor", "estanno", "estmes"], {
  unique: true,
})
@Entity("SUI_ESTADORESUL")
export class SuiEstadoresul {
  @Column("number", { primary: true, name: "APSID", scale: 0 })
  apsid: number;

  @Column("varchar2", { name: "APSNOM", length: 100 })
  apsnom: string;

  @Column("number", { primary: true, name: "SUIFOR", scale: 0 })
  suifor: number;

  @Column("varchar2", { name: "SUIFORNOM", length: 100 })
  suifornom: string;

  @Column("number", { primary: true, name: "ESTANNO", scale: 0 })
  estanno: number;

  @Column("number", { primary: true, name: "ESTMES", scale: 0 })
  estmes: number;

  @Column("varchar2", {
    name: "ESTEST",
    length: 20,
    default: () => "'Pendiente'",
  })
  estest: string;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
