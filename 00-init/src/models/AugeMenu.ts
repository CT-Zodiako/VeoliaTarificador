import { Column, Entity, Index } from "typeorm";

@Index("SYS_C0011956", ["menuId"], { unique: true })
@Entity("AUGE_MENU")
export class AugeMenu {
  @Column("number", { primary: true, name: "MENU_ID" })
  menuId: number;

  @Column("varchar2", { name: "MENU_NOMBRE", length: 150 })
  menuNombre: string;

  @Column("number", { name: "MENU_PADRE", nullable: true })
  menuPadre: number | null;

  @Column("varchar2", { name: "MENU_PATH", nullable: true, length: 150 })
  menuPath: string | null;

  @Column("number", { name: "MENU_ESTADO", default: () => "1" })
  menuEstado: number;
}
