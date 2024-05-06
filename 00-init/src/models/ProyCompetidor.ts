import { Column, Entity, Index } from "typeorm";

@Index("PKPROY_COMPETIDOR", ["proyId", "codAps", "codEmpresa", "anno", "mes"], {
  unique: true,
})
@Entity("PROY_COMPETIDOR")
export class ProyCompetidor {
  @Column("float", { name: "C_CPE", precision: 126 })
  cCpe: number;

  @Column("float", { name: "C_CTLMX", precision: 126 })
  cCtlmx: number;

  @Column("float", { name: "C_VA_CRT", precision: 126 })
  cVaCrt: number;

  @Column("float", { name: "C_VA_CRT_ABC", precision: 126 })
  cVaCrtAbc: number;

  @Column("float", { name: "C_VA_CDF", precision: 126 })
  cVaCdf: number;

  @Column("float", { name: "C_VA_CDF_ABC", precision: 126 })
  cVaCdfAbc: number;

  @Column("float", { name: "C_NAA", precision: 126 })
  cNaa: number;

  @Column("float", { name: "C_QA", precision: 126 })
  cQa: number;

  @Column("float", { name: "C_TAFA", precision: 126 })
  cTafa: number;

  @Column("float", { name: "C_CRT_COMPETIDOR", precision: 126 })
  cCrtCompetidor: number;

  @Column("float", { name: "C_CDF_COMPETIDOR", precision: 126 })
  cCdfCompetidor: number;

  @Column("float", { name: "C_QRTZ", precision: 126 })
  cQrtz: number;

  @Column("float", { name: "C_CTL_SIN_INCENTIVO", precision: 126 })
  cCtlSinIncentivo: number;

  @Column("float", { name: "C_INCENTIVO", precision: 126 })
  cIncentivo: number;

  @Column("float", { name: "C_CDFSINCENTIVO", precision: 126 })
  cCdfsincentivo: number;

  @Column("float", { name: "C_CPODA", precision: 126 })
  cCpoda: number;

  @Column("date", { name: "FECHACREA", default: () => "sysdate" })
  fechacrea: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;

  @Column("number", { primary: true, name: "PROY_ID", scale: 0 })
  proyId: number;

  @Column("number", { primary: true, name: "COD_APS", scale: 0 })
  codAps: number;

  @Column("varchar2", { name: "NOM_APS", nullable: true, length: 100 })
  nomAps: string | null;

  @Column("number", { primary: true, name: "COD_EMPRESA", scale: 0 })
  codEmpresa: number;

  @Column("varchar2", { name: "NOM_EMPRESA", nullable: true, length: 100 })
  nomEmpresa: string | null;

  @Column("number", { primary: true, name: "ANNO", scale: 0 })
  anno: number;

  @Column("number", { primary: true, name: "MES", scale: 0 })
  mes: number;

  @Column("float", { name: "C_N", precision: 126 })
  cN: number;

  @Column("float", { name: "C_NA", precision: 126 })
  cNa: number;

  @Column("float", { name: "C_ND", precision: 126 })
  cNd: number;

  @Column("float", { name: "C_TAFNA", precision: 126 })
  cTafna: number;

  @Column("float", { name: "C_VALOR_MTS3", precision: 126 })
  cValorMts3: number;

  @Column("float", { name: "C_QRT", precision: 126 })
  cQrt: number;

  @Column("float", { name: "C_QLU", precision: 126 })
  cQlu: number;

  @Column("float", { name: "C_QNA", precision: 126 })
  cQna: number;

  @Column("float", { name: "C_QBL", precision: 126 })
  cQbl: number;

  @Column("float", { name: "C_QRECHAZO", precision: 126 })
  cQrechazo: number;

  @Column("float", { name: "C_QRS", precision: 126 })
  cQrs: number;

  @Column("float", { name: "C_CBLJ", precision: 126 })
  cCblj: number;

  @Column("float", { name: "C_LBL", precision: 126 })
  cLbl: number;

  @Column("float", { name: "C_M2CC", precision: 126 })
  cM2Cc: number;

  @Column("float", { name: "C_M2LAV", precision: 126 })
  cM2Lav: number;

  @Column("float", { name: "C_TI", precision: 126 })
  cTi: number;

  @Column("float", { name: "C_TM", precision: 126 })
  cTm: number;

  @Column("float", { name: "C_KLP", precision: 126 })
  cKlp: number;

  @Column("float", { name: "C_VL", precision: 126 })
  cVl: number;

  @Column("number", { name: "C_ESCENARIO", scale: 0 })
  cEscenario: number;

  @Column("float", { name: "C_T", precision: 126 })
  cT: number;
}
