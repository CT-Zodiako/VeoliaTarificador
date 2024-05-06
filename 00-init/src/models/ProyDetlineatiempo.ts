import { Column, Entity, Index } from "typeorm";

@Index("PK_PROY_DETLINEATIEMPO", ["proyid", "aps", "proyanno", "proymes"], {
  unique: true,
})
@Entity("PROY_DETLINEATIEMPO")
export class ProyDetlineatiempo {
  @Column("float", {
    name: "DELTINDIPCC",
    nullable: true,
    precision: 126,
    default: () => "0",
  })
  deltindipcc: number | null;

  @Column("float", { name: "DELTIPCCS", precision: 126, default: () => "0" })
  deltipccs: number;

  @Column("number", { primary: true, name: "PROYID", scale: 0 })
  proyid: number;

  @Column("number", { primary: true, name: "APS", scale: 0 })
  aps: number;

  @Column("number", { primary: true, name: "PROYANNO", scale: 0 })
  proyanno: number;

  @Column("number", { primary: true, name: "PROYMES", scale: 0 })
  proymes: number;

  @Column("float", { name: "DELTIPC", precision: 126 })
  deltipc: number;

  @Column("float", { name: "DELTIPCC", precision: 126 })
  deltipcc: number;

  @Column("float", { name: "DELTSMLV", precision: 126 })
  deltsmlv: number;

  @Column("float", { name: "DELTIOEXP", precision: 126 })
  deltioexp: number;

  @Column("float", { name: "DELTFACPRODUC", precision: 126 })
  deltfacproduc: number;

  @Column("number", { name: "DELTESTADO", scale: 0, default: () => "0" })
  deltestado: number;

  @Column("date", { name: "DELTFECHA", default: () => "sysdate" })
  deltfecha: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;
}
