import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'RELI_INFOEMPRDIVI', schema: 'RELIQ' })
export class ReliInfoEmprDivi {
  @PrimaryColumn({ name: 'INED_ID', type: 'number' })
  inedId: number;

  @PrimaryColumn({ name: 'RELI_ID', type: 'number' })
  reliId: number;

  @Column({ name: 'APSA_ID', type: 'number' })
  apsaId: number;

  @Column({ name: 'EMPR_EMPR', type: 'number' })
  emprEmpr: number;

  @Column({ name: 'DIVI_DIVI', type: 'number' })
  diviDivi: number;

  @Column({ name: 'INED_ANNO', type: 'number' })
  inedAnno: number;

  @Column({ name: 'INED_MES', type: 'number' })
  inedMes: number;

  @Column({ name: 'INED_CBLJ', type: 'float' })
  inedCblj: number;

  @Column({ name: 'INED_LBLJ', type: 'float' })
  inedLblj: number;

  @Column({ name: 'INED_N', type: 'float' })
  inedN: number;

  @Column({ name: 'INED_M3AGUA', type: 'float' })
  inedM3Agua: number;

  @Column({ name: 'INED_CP', type: 'float' })
  inedCp: number;

  @Column({ name: 'INED_M2CCJ', type: 'float' })
  inedM2Ccj: number;

  @Column({ name: 'INED_M2LAVJ', type: 'float' })
  inedM2Lavj: number;

  @Column({ name: 'INED_TIJ', type: 'float' })
  inedTij: number;

  @Column({ name: 'INED_KLPJ', type: 'float' })
  inedKlpj: number;

  @Column({ name: 'INED_TMJ', type: 'float' })
  inedTmj: number;

  @Column({ name: 'INED_CLAVJ', type: 'float' })
  inedClavj: number;

  @Column({ name: 'INED_QRTJ', type: 'float', default: 0 })
  inedQrtj: number;

  @Column({ name: 'INED_QRSJ', type: 'float', default: 0 })
  inedQrsj: number;

  @Column({ name: 'INED_FECHACREACION', type: 'date', default: () => 'SYSDATE' })
  inedFechaCreacion: Date;

  @Column({ name: 'USUA_USUA', type: 'number', default: 0 })
  usuaUsua: number;
}