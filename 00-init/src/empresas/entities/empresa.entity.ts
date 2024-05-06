import { Column, Entity, Index } from 'typeorm';

@Index('PK_AUGE_EMPRESAS', ['EMPR_EMPR'], { unique: true })
@Entity('AUGE_EMPRESAS')
export class AugeEmpresas {
  @Column('varchar2', { name: 'EMPR_NUAP', length: 30, default: () => "'0'" })
  EMPR_NUAP: string;

  @Column('number', { primary: true, name: 'EMPR_EMPR' })
  EMPR_EMPR: number;

  @Column('varchar2', { name: 'EMPR_NOMBRE', nullable: true, length: 255 })
  EMPR_NOMBRE: string | null;

  @Column('varchar2', { name: 'EMPR_ESTADO', nullable: true, length: 10 })
  EMPR_ESTADO: string | null;

  @Column('number', { name: 'EMPR_PROPIA', default: () => '1' })
  EMPR_PROPIA: number;

  @Column('date', {
    name: 'EMPR_FECHACREACION',
    nullable: true,
    default: () => 'sysdate',
  })
  EMPR_FECHACREACION: Date | null;

  @Column('number', { name: 'USUA_USUA' })
  USUA_USUA: number;
}
