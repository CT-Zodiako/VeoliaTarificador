import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'RELI_INFOAPSRELLENO', schema: 'RELIQ' })
export class ReliInfoApsRelleno {
  @PrimaryColumn({ name: 'IARE_ID', type: 'number' })
  iareId: number;

  @PrimaryColumn({ name: 'RELI_ID', type: 'number' })
  reliId: number;

  @Column({ name: 'APSA_ID', type: 'number' })
  apsaId: number;

  @Column({ name: 'RELL_ID', type: 'number' })
  rellId: number;

  @Column({ name: 'IARE_ANNO', type: 'number' })
  iareAnno: number;

  @Column({ name: 'IARE_MES', type: 'number' })
  iareMes: number;

  @Column({ name: 'IARE_QRS', type: 'float' })
  iareQrs: number;

  @Column({ name: 'IARE_CDFK', type: 'float', default: 0 })
  iareCdfk: number;

  @Column({ name: 'IARE_VACDFABC', type: 'float', default: 0 })
  iareVacdfabc: number;

  @Column({ name: 'IARE_VACDF', type: 'float', default: 0 })
  iareVacdf: number;

  @Column({ name: 'IARE_VL', type: 'float', default: 0 })
  iareVl: number;

  @Column({ name: 'IARE_CTMLX', type: 'float', default: 0 })
  iareCtmlx: number;

  @Column({ name: 'IARE_CTLK', type: 'float', default: 0 })
  iareCtlk: number;

  @Column({ name: 'IARE_VACTLABC', type: 'float', default: 0 })
  iareVactlabc: number;

  @Column({ name: 'IARE_VACTL', type: 'float', default: 0 })
  iareVactl: number;

  @Column({ name: 'IARE_ESCENARIO', type: 'number', default: 0 })
  iareEscenario: number;

  @Column({ name: 'IARE_FECHACREACION', type: 'date', default: () => 'SYSDATE' })
  iareFechaCreacion: Date;

  @Column({ name: 'USUA_USUA', type: 'number', default: 0 })
  usuaUsua: number;

  @Column({ name: 'IARE_C', type: 'float', default: 0 })
  iareC: number;
}