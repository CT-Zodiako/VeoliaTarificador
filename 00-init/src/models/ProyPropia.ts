import { Column, Entity, Index } from "typeorm";

@Index("PKPROY_PROPIA", ["proyId", "codAps", "codEmpresa", "anno", "mes"], {
  unique: true,
})
@Entity("PROY_PROPIA")
export class ProyPropia {
  @Column("float", { name: "V_CTLMX", precision: 126 })
  vCtlmx: number;

  @Column("float", { name: "V_T", precision: 126 })
  vT: number;

  @Column("float", { name: "V_CPE", precision: 126 })
  vCpe: number;

  @Column("float", { name: "V_VA_CRT", precision: 126 })
  vVaCrt: number;

  @Column("float", { name: "V_VA_CRT_ABC", precision: 126 })
  vVaCrtAbc: number;

  @Column("float", { name: "V_VA_CDF", precision: 126 })
  vVaCdf: number;

  @Column("float", { name: "V_VA_CDF_ABC", precision: 126 })
  vVaCdfAbc: number;

  @Column("float", { name: "V_NAA", precision: 126 })
  vNaa: number;

  @Column("float", { name: "V_QA", precision: 126 })
  vQa: number;

  @Column("float", { name: "V_TAFA", precision: 126 })
  vTafa: number;

  @Column("float", { name: "V_CP", precision: 126 })
  vCp: number;

  @Column("float", { name: "V_CRT_PROPIO", precision: 126 })
  vCrtPropio: number;

  @Column("float", { name: "V_CDF_FACTURADO", precision: 126 })
  vCdfFacturado: number;

  @Column("float", { name: "V_QRTZ", precision: 126 })
  vQrtz: number;

  @Column("float", { name: "V_CDF_TERCERO", precision: 126 })
  vCdfTercero: number;

  @Column("float", { name: "V_CTL_TERCERO", precision: 126 })
  vCtlTercero: number;

  @Column("float", { name: "V_IR_TERCERO", precision: 126 })
  vIrTercero: number;

  @Column("date", { name: "FECHACREA", default: () => "sysdate" })
  fechacrea: Date;

  @Column("number", { name: "USUARIO", scale: 0 })
  usuario: number;

  @Column("float", { name: "V_QRS", precision: 126 })
  vQrs: number;

  @Column("float", { name: "V_CBLJ", precision: 126 })
  vCblj: number;

  @Column("float", { name: "V_LBL", precision: 126 })
  vLbl: number;

  @Column("float", { name: "V_VALOR_MTS3", precision: 126 })
  vValorMts3: number;

  @Column("float", { name: "V_M2CC", precision: 126 })
  vM2Cc: number;

  @Column("float", { name: "V_M2LAV", precision: 126 })
  vM2Lav: number;

  @Column("float", { name: "V_TI", precision: 126 })
  vTi: number;

  @Column("float", { name: "V_TM", precision: 126 })
  vTm: number;

  @Column("float", { name: "V_KLP", precision: 126 })
  vKlp: number;

  @Column("float", { name: "V_VL", precision: 126 })
  vVl: number;

  @Column("number", { name: "V_ESCENARIO", scale: 0 })
  vEscenario: number;

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

  @Column("varchar2", { name: "V_DISPTERC", nullable: true, length: 2 })
  vDispterc: string | null;

  @Column("varchar2", { name: "IAT", nullable: true, length: 2 })
  iat: string | null;

  @Column("float", { name: "V_N", precision: 126 })
  vN: number;

  @Column("float", { name: "V_NA", precision: 126 })
  vNa: number;

  @Column("float", { name: "V_ND", precision: 126 })
  vNd: number;

  @Column("float", { name: "V_TAFNA", precision: 126 })
  vTafna: number;

  @Column("float", { name: "V_QRT", precision: 126 })
  vQrt: number;

  @Column("float", { name: "V_QLU", precision: 126 })
  vQlu: number;

  @Column("float", { name: "V_QNA", precision: 126 })
  vQna: number;

  @Column("float", { name: "V_QBL", precision: 126 })
  vQbl: number;

  @Column("float", { name: "V_QR", precision: 126 })
  vQr: number;
}
