import { Column, Entity, Index, OneToMany } from "typeorm";
import { AucoCarguecomercial } from "./AucoCarguecomercial";

@Index("AUCO_RESCOMERCIAL_PK", ["rcomId"], { unique: true })
@Entity("AUCO_RESCOMERCIAL")
export class AucoRescomercial {
  @Column("number", { primary: true, name: "RCOM_ID" })
  rcomId: number;

  @Column("number", { name: "APSA_ID" })
  apsaId: number;

  @Column("number", { name: "RCOM_ANNO" })
  rcomAnno: number;

  @Column("number", { name: "RCOM_MES" })
  rcomMes: number;

  @Column("number", { name: "RCOM_N" })
  rcomN: number;

  @Column("number", { name: "RCOM_ND" })
  rcomNd: number;

  @Column("number", { name: "RCOM_NA" })
  rcomNa: number;

  @Column("number", { name: "RCOM_TAFNA" })
  rcomTafna: number;

  @Column("date", { name: "RCOM_FECRE", default: () => "sysdate" })
  rcomFecre: Date;

  @Column("number", { name: "RCOM_USUCRE", default: () => "0" })
  rcomUsucre: number;

  @OneToMany(
    () => AucoCarguecomercial,
    (aucoCarguecomercial) => aucoCarguecomercial.rcom
  )
  aucoCarguecomercials: AucoCarguecomercial[];
}
