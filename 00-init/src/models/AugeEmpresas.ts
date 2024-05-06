import { Column, Entity, Index, OneToMany } from "typeorm";
import { AucoApsemprdivi } from "./AucoApsemprdivi";
import { AucoCertadicional } from "./AucoCertadicional";
import { AucoCertaprovechamiento } from "./AucoCertaprovechamiento";
import { AucoCertcomercial } from "./AucoCertcomercial";
import { AucoCertcompetidor } from "./AucoCertcompetidor";
import { AucoCertcontabilidad } from "./AucoCertcontabilidad";
import { AucoCertoperativo } from "./AucoCertoperativo";
import { AucoCostosbase } from "./AucoCostosbase";
import { AugeEmpresasdivipoli } from "./AugeEmpresasdivipoli";
import { ProyInfoadicional } from "./ProyInfoadicional";

@Index("PK_AUGE_EMPRESAS", ["emprEmpr"], { unique: true })
@Entity("AUGE_EMPRESAS")
export class AugeEmpresas {
  @Column("varchar2", { name: "EMPR_NUAP", length: 30, default: () => "'0'" })
  emprNuap: string;

  @Column("number", { primary: true, name: "EMPR_EMPR" })
  emprEmpr: number;

  @Column("varchar2", { name: "EMPR_NOMBRE", nullable: true, length: 255 })
  emprNombre: string | null;

  @Column("varchar2", { name: "EMPR_ESTADO", nullable: true, length: 10 })
  emprEstado: string | null;

  @Column("number", { name: "EMPR_PROPIA", default: () => "1" })
  emprPropia: number;

  @Column("date", {
    name: "EMPR_FECHACREACION",
    nullable: true,
    default: () => "sysdate",
  })
  emprFechacreacion: Date | null;

  @Column("number", { name: "USUA_USUA" })
  usuaUsua: number;

  @OneToMany(
    () => AucoApsemprdivi,
    (aucoApsemprdivi) => aucoApsemprdivi.emprEmpr2
  )
  aucoApsemprdivis: AucoApsemprdivi[];

  @OneToMany(
    () => AucoCertadicional,
    (aucoCertadicional) => aucoCertadicional.emprEmpr2
  )
  aucoCertadicionals: AucoCertadicional[];

  @OneToMany(
    () => AucoCertaprovechamiento,
    (aucoCertaprovechamiento) => aucoCertaprovechamiento.emprEmpr2
  )
  aucoCertaprovechamientos: AucoCertaprovechamiento[];

  @OneToMany(
    () => AucoCertcomercial,
    (aucoCertcomercial) => aucoCertcomercial.emprEmpr2
  )
  aucoCertcomercials: AucoCertcomercial[];

  @OneToMany(
    () => AucoCertcompetidor,
    (aucoCertcompetidor) => aucoCertcompetidor.emprEmpr2
  )
  aucoCertcompetidors: AucoCertcompetidor[];

  @OneToMany(
    () => AucoCertcontabilidad,
    (aucoCertcontabilidad) => aucoCertcontabilidad.emprEmpr2
  )
  aucoCertcontabilidads: AucoCertcontabilidad[];

  @OneToMany(
    () => AucoCertoperativo,
    (aucoCertoperativo) => aucoCertoperativo.emprEmpr2
  )
  aucoCertoperativos: AucoCertoperativo[];

  @OneToMany(() => AucoCostosbase, (aucoCostosbase) => aucoCostosbase.emprEmpr2)
  aucoCostosbases: AucoCostosbase[];

  @OneToMany(
    () => AugeEmpresasdivipoli,
    (augeEmpresasdivipoli) => augeEmpresasdivipoli.emprEmpr2
  )
  augeEmpresasdivipolis: AugeEmpresasdivipoli[];

  @OneToMany(
    () => ProyInfoadicional,
    (proyInfoadicional) => proyInfoadicional.emprEmpr2
  )
  proyInfoadicionals: ProyInfoadicional[];
}
