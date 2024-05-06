import { Column, Entity, Index, OneToMany } from "typeorm";
import { AucoApsemprdivi } from "./AucoApsemprdivi";
import { AucoCertcomercial } from "./AucoCertcomercial";
import { AugeEmpresasdivipoli } from "./AugeEmpresasdivipoli";

@Index("PK_AUGE_DIVIPOLI", ["diviDivi"], { unique: true })
@Entity("AUGE_DIVIPOLI")
export class AugeDivipoli {
  @Column("number", { primary: true, name: "DIVI_DIVI" })
  diviDivi: number;

  @Column("varchar2", { name: "DIVI_PADRE", length: 10 })
  diviPadre: string;

  @Column("number", { name: "DIVI_NIVEL" })
  diviNivel: number;

  @Column("varchar2", { name: "DIVI_NOMBRE", length: 100 })
  diviNombre: string;

  @Column("varchar2", { name: "DIVI_CODIGO", length: 10 })
  diviCodigo: string;

  @Column("float", {
    name: "DIVI_FACTSALINIDAD",
    precision: 126,
    default: () => "0",
  })
  diviFactsalinidad: number;

  @OneToMany(
    () => AucoApsemprdivi,
    (aucoApsemprdivi) => aucoApsemprdivi.diviDivi2
  )
  aucoApsemprdivis: AucoApsemprdivi[];

  @OneToMany(
    () => AucoCertcomercial,
    (aucoCertcomercial) => aucoCertcomercial.diviDivi2
  )
  aucoCertcomercials: AucoCertcomercial[];

  @OneToMany(
    () => AugeEmpresasdivipoli,
    (augeEmpresasdivipoli) => augeEmpresasdivipoli.diviDivi2
  )
  augeEmpresasdivipolis: AugeEmpresasdivipoli[];
}
