import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'RELI_INFOAPSEMPRDIVI', schema: 'RELIQ' })
export class ReliInfoApsEmprDivi {
  @PrimaryColumn({ name: 'IAED_ID', type: 'number' })
  iaedId: number;

  @PrimaryColumn({ name: 'RELI_ID', type: 'number' })
  reliId: number;

  @Column({ name: 'APSA_ID', type: 'number' })
  apsaId: number;

  @Column({ name: 'EMPR_EMPR', type: 'number' })
  emprEmpr: number;

  @Column({ name: 'DIVI_DIVI', type: 'number' })
  diviDivi: number;

  @Column({ name: 'IAED_ANNO', type: 'number' })
  iaedAnno: number;

  @Column({ name: 'IAED_MES', type: 'number' })
  iaedMes: number;

  @Column({ name: 'IAED_QRTZ', type: 'float' })
  iaedQrtz: number;

  @Column({ name: 'IAED_CPE', type: 'float' })
  iaedCpe: number;

  @Column({ name: 'IAED_T', type: 'float' })
  iaedT: number;

  @Column({ name: 'IAED_VACRTABC', type: 'float', default: 0 })
  iaedVacrtabc: number;

  @Column({ name: 'IAED_VACRT', type: 'float', default: 0 })
  iaedVacrt: number;

  @Column({ name: 'IAED_CRTZ', type: 'float', default: 0 })
  iaedCrtz: number;

  @Column({ name: 'IAED_QBL', type: 'float', default: 0 })
  iaedQbl: number;

  @Column({ name: 'IAED_QLU', type: 'float', default: 0 })
  iaedQlu: number;

  @Column({ name: 'IAED_QR', type: 'float', default: 0 })
  iaedQr: number;

  @Column({ name: 'IAED_TAFA', type: 'float', default: 0 })
  iaedTafa: number;

  @Column({ name: 'IAED_ND', type: 'float', default: 0 })
  iaedNd: number;

  @Column({ name: 'IAED_NA', type: 'float', default: 0 })
  iaedNa: number;

  @Column({ name: 'IAED_QNA', type: 'float', default: 0 })
  iaedQna: number;

  @Column({ name: 'IAED_TAFNA', type: 'float', default: 0 })
  iaedTafna: number;

  @Column({ name: 'IAED_QA', type: 'float', default: 0 })
  iaedQa: number;

  @Column({ name: 'IAED_FECHACREACION', type: 'date', default: () => 'SYSDATE' })
  iaedFechaCreacion: Date;

  @Column({ name: 'USUA_USUA', type: 'number', default: 0 })
  usuaUsua: number;

  @Column({ name: 'IAED_APROVECHA', type: 'number', default: 0 })
  iaedAprovecha: number;

  @Column({ name: 'IAED_QALMACEN', type: 'float', default: 0 })
  iaedQalmacen: number;

  @Column({ name: 'IAED_CPEET', type: 'float', nullable: true })
  iaedCpeet: number;

  @Column({ name: 'IAED_QRTET', type: 'float', nullable: true })
  iaedQrtet: number;

  @Column({ name: 'IAED_CRTCOMP', type: 'float', nullable: true })
  iaedCrtcomp: number;

  @Column({ name: 'IAED_CDFCOMP', type: 'float', nullable: true })
  iaedCdfcomp: number;

  @Column({ name: 'IAED_QRSCOMP', type: 'float', nullable: true })
  iaedQrscomp: number;

  @Column({ name: 'IAED_NAA', type: 'float', nullable: true })
  iaedNaa: number;

  @Column({ name: 'IAED_NDA', type: 'float', nullable: true })
  iaedNda: number;
}