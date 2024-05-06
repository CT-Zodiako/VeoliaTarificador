import { Column, Entity, Index } from 'typeorm';

@Index(
  'IX_AUCO_APSSUBSCONT_01',
  [
    'APSA_ID',
    'EMPR_EMPR',
    'DIVI_DIVI',
    'CLAS_CLASE',
    'SUCO_ANNO',
    'SUCO_MES',
    'PARA_TIPPRED20016',
  ],
  {},
)
@Index('PK_AUCO_APSSUBSCONT', ['SUCO_ID'], { unique: true })
@Entity('AUCO_APSSUBSCONT')
export class AucoApssubscont {
  @Column('number', { primary: true, name: 'SUCO_ID' })
  SUCO_ID: number;

  @Column('number', { name: 'APSA_ID' })
  APSA_ID: number;

  @Column('number', { name: 'EMPR_EMPR' })
  EMPR_EMPR: number;

  @Column('number', { name: 'DIVI_DIVI' })
  DIVI_DIVI: number;

  @Column('number', { name: 'CLAS_CLASE' })
  CLAS_CLASE: number;

  @Column('number', { name: 'SUCO_ANNO' })
  SUCO_ANNO: number;

  @Column('number', { name: 'SUCO_MES' })
  SUCO_MES: number;

  @Column('number', { name: 'PARA_TIPPRED20016', scale: 0 })
  PARA_TIPPRED20016: number;

  @Column('float', { name: 'SUCO_VALOR', precision: 126, default: () => '0' })
  SUCO_VALOR: number;

  @Column('number', { name: 'SUCO_ESTADO', default: () => '1' })
  SUCO_ESTADO: number;

  @Column('date', {
    name: 'SUCO_FECHACREACION',
    nullable: true,
    default: () => 'sysdate',
  })
  SUCO_FECHACREACION: Date | null;

  @Column('number', { name: 'USUA_USUA' })
  USUA_USUA: number;
}
