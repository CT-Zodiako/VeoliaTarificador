import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'RELQRELIQUIDA', schema: 'RELIQ' })
export class Reliquida {
  @PrimaryColumn({ name: 'RELQID', type: 'number' })
  relqid: number;

  @Column({ name: 'APSAID', type: 'number' })
  apsaid: number;

  @Column({ name: 'RELQNOMBRE', type: 'varchar', length: 100 })
  relqnombre: string;

  @Column({ name: 'RELQDESCRIP', type: 'varchar', length: 500 })
  relqdescrip: string;

  @Column({ name: 'RELQDESDE', type: 'varchar', length: 7 })
  relqdesde: string;

  @Column({ name: 'RELQHASTA', type: 'varchar', length: 7 })
  relqhasta: string;

  @Column({ name: 'RELQUSUSOLICITA', type: 'number' })
  relqususolicita: number;

  @Column({ name: 'RELQESTADO', type: 'number', default: 1 })
  relqestado: number;

  @Column({ name: 'RELQFECHA', type: 'date', default: () => 'SYSDATE' })
  relqfecha: Date;

  @Column({ name: 'RELQIDATT', type: 'number', default: 0 })
  relqidatt: number;

  @Column({ name: 'RELQUSUAPRUEBA', type: 'number' })
  relqusuaprueba: number;
}