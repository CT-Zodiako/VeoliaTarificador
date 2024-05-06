import { Column, Entity, Index } from "typeorm";

@Index("PKPGIRSINFORME", ["apsid", "periodo"], { unique: true })
@Entity("PGIRS_INFORME")
export class PgirsInforme {
  @Column("number", { primary: true, name: "APSID", scale: 0 })
  apsid: number;

  @Column("number", { primary: true, name: "PERIODO", scale: 0 })
  periodo: number;

  @Column("float", { name: "BARRIDO", precision: 126, default: () => "0" })
  barrido: number;

  @Column("float", { name: "BARRIDOPGIRS", precision: 126, default: () => "0" })
  barridopgirs: number;

  @Column("varchar2", {
    name: "BARRIDOCOLOR",
    length: 10,
    default: () => "'ROJO'",
  })
  barridocolor: string;

  @Column("float", { name: "PODA", precision: 126, default: () => "0" })
  poda: number;

  @Column("float", { name: "PODAPGIRS", precision: 126, default: () => "0" })
  podapgirs: number;

  @Column("varchar2", {
    name: "PODACOLOR",
    length: 10,
    default: () => "'ROJO'",
  })
  podacolor: string;

  @Column("float", { name: "CESPED", precision: 126, default: () => "0" })
  cesped: number;

  @Column("float", { name: "CESPEDPGIRS", precision: 126, default: () => "0" })
  cespedpgirs: number;

  @Column("varchar2", {
    name: "CESPEDCOLOR",
    length: 10,
    default: () => "'ROJO'",
  })
  cespedcolor: string;

  @Column("float", { name: "LAVADO", precision: 126, default: () => "0" })
  lavado: number;

  @Column("float", { name: "LAVADOPGIRS", precision: 126, default: () => "0" })
  lavadopgirs: number;

  @Column("varchar2", {
    name: "LAVADOCOLOR",
    length: 10,
    default: () => "'ROJO'",
  })
  lavadocolor: string;

  @Column("float", { name: "PLAYAS", precision: 126, default: () => "0" })
  playas: number;

  @Column("float", { name: "PLAYASPGIRS", precision: 126, default: () => "0" })
  playaspgirs: number;

  @Column("varchar2", {
    name: "PLAYASCOLOR",
    length: 10,
    default: () => "'ROJO'",
  })
  playascolor: string;

  @Column("float", { name: "CESTASINS", precision: 126, default: () => "0" })
  cestasins: number;

  @Column("float", {
    name: "CESTASINSPGIRS",
    precision: 126,
    default: () => "0",
  })
  cestasinspgirs: number;

  @Column("varchar2", {
    name: "CESTASINSCOLOR",
    length: 10,
    default: () => "'ROJO'",
  })
  cestasinscolor: string;

  @Column("float", { name: "CESTASMAN", precision: 126, default: () => "0" })
  cestasman: number;

  @Column("float", {
    name: "CESTASMANPGIRS",
    precision: 126,
    default: () => "0",
  })
  cestasmanpgirs: number;

  @Column("varchar2", {
    name: "CESTASMANCOLOR",
    length: 10,
    default: () => "'ROJO'",
  })
  cestasmancolor: string;
}
