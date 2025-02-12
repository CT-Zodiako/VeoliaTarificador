import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'RELI_INFUSUAPSEMPRDIVI', schema: 'RELIQ' })
export class ReliInfUsuApSemprDivi {
  @PrimaryColumn({ name: 'IUAE_ID', type: 'number' })
  iuaeId: number;

  @Column({ name: 'RELI_ID', type: 'number' })
  reliId: number;

  @Column({ name: 'APSA_ID', type: 'number' })
  apsaId: number;

  @Column({ name: 'EMPR_EMPR', type: 'number' })
  emprEmpr: number;

  @Column({ name: 'DIVI_DIVI', type: 'number' })
  diviDivi: number;

  @Column({ name: 'FAPR_CODIGO', type: 'number' })
  faprCodigo: number;

  @Column({ name: 'CLAS_CLASEUSO', type: 'number' })
  clasClaseUso: number;

  @Column({ name: 'PARA_TIPTAR20012', type: 'number' })
  paraTipTar20012: number;

  @Column({ name: 'IUAE_ANNO', type: 'number' })
  iuaeAnno: number;

  @Column({ name: 'IUAE_MES', type: 'number' })
  iuaeMes: number;

  @Column({ name: 'IUAE_CANTIDAD', type: 'float' })
  iuaeCantidad: number;

  @Column({ name: 'IUAE_TONELADAS', type: 'float' })
  iuaeToneladas: number;

  @CreateDateColumn({ name: 'IUAE_FECHACREACION', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  iuaeFechaCreacion: Date;

  @Column({ name: 'USUA_USUA', type: 'number' })
  usuaUsua: number;

  @Column({ name: 'PARA_UBICACION20016', type: 'number', default: 2 })
  paraUbicacion20016: number;

  @Column({ name: 'PARA_TIPFAC20014', type: 'number', nullable: true })
  paraTipFac20014?: number;
}