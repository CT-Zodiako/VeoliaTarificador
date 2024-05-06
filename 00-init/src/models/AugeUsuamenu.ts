import { Column, Entity, Index } from "typeorm";

@Index("IXUSUAMENU01", ["sisuId", "menuId"], { unique: true })
@Index("SYS_C0011960", ["usmeId"], { unique: true })
@Entity("AUGE_USUAMENU")
export class AugeUsuamenu {
  @Column("number", { primary: true, name: "USME_ID" })
  usmeId: number;

  @Column("number", { name: "SISU_ID" })
  sisuId: number;

  @Column("number", { name: "MENU_ID" })
  menuId: number;

  @Column("number", { name: "USME_ESTADO", nullable: true, default: () => "1" })
  usmeEstado: number | null;
}
