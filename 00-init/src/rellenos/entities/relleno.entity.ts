import { Column, Entity, Index } from 'typeorm';

@Index('PK_AUCO_RELLENOS', ['RELL_ID'], { unique: true })
@Entity('AUCO_RELLENOS')
export class AucoRellenos {
  @Column('number', { primary: true, name: 'RELL_ID',  })
  RELL_ID: number;

  @Column('varchar2', { name: 'RELL_NOMRELLENO', nullable: true, length: 20 })
  RELL_NOMRELLENO: string | null;

  @Column('clob', { name: 'RELL_DESCRIPCION' })
  RELL_DESCRIPCION: string;

  @Column('number', { name: 'RELL_ESTADO', default: () => '1' })
  RELL_ESTADO: number;

  @Column('number', { name: 'RELL_PROPIO', default: () => '1' })
  RELL_PROPIO: number;

  @Column('date', {
    name: 'RELL_FECHACREACION',
    nullable: true,
    default: () => 'sysdate',
  })
  rellFechacreacion: Date | null;

  @Column('number', { name: 'RELL_REGIONAL', default: () => '0' })
  RELL_REGIONAL: number;

  @Column('number', { name: 'USUA_USUA', default: () => '0' })
  USUA_USUA: number;

  @Column('varchar2', { name: 'RELL_NUSD', nullable: true, length: 30 })
  RELL_NUSD: number;
}
