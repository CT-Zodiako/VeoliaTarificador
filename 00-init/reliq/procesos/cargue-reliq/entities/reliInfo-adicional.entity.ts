import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'RELI_INFOADICIONAL', schema: 'RELIQ' })
export class ReliInfoAdicional {
  @PrimaryColumn({ name: 'CEAD_ID', type: 'number' })
  ceadId: number;

  @PrimaryColumn({ name: 'RELI_ID', type: 'number' })
  reliId: number;

  @Column({ name: 'APSA_ID', type: 'number' })
  apsaId: number;

  @Column({ name: 'EMPR_EMPR', type: 'number' })
  emprEmpr: number;

  @Column({ name: 'DIVI_DIVI', type: 'number' })
  diviDivi: number;

  @Column({ name: 'RELL_ID', type: 'number' })
  rellId: number;

  @Column({ name: 'CEAD_ANNO', type: 'number' })
  ceadAnno: number;

  @Column({ name: 'CEAD_MES', type: 'number' })
  ceadMes: number;

  @Column({ name: 'CEAD_CDF', type: 'float', default: 0, nullable: false })
  ceadCdf: number;

  @Column({ name: 'CEAD_CTL', type: 'float', default: 0, nullable: false })
  ceadCtl: number;

  @CreateDateColumn({ name: 'CEAD_FECHACREACION', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  ceadFechaCreacion: Date;

  @Column({ name: 'USUA_USUA', type: 'number' })
  usuaUsua: number;
}
