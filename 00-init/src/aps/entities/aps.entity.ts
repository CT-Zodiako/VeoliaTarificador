import { Column, Entity, Index, OneToMany } from 'typeorm';
// import { AucoApsdescost } from "./AucoApsdescost";
// import { AucoApsemprdivi } from "./AucoApsemprdivi";
// import { AucoCertcomercial } from "./AucoCertcomercial";

@Index('PK_AUCO_APSASEO', ['APSA_ID'], { unique: true })
@Entity('AUCO_APSASEO')
export class Aps {
  @Column('varchar2', { name: 'APSA_NUAP', nullable: true, length: 30 })
  APSA_NUAP: string | null;

  @Column('varchar2', { name: 'APSA_IDSUI', nullable: true, length: 100 })
  APSA_IDSUI: string | null;

  @Column('number', { primary: true, name: 'APSA_ID' })
  APSA_ID: number;

  @Column('varchar2', { name: 'APSA_NOMAPS', length: 30 })
  APSA_NOMAPS: string;

  @Column('number', { name: 'APSA_ESTADO', default: () => '1' })
  APSA_ESTADO: number;

  @Column('number', { name: 'APSA_PROPIO', default: () => '1' })
  APSA_PROPIO: number;

  @Column('date', {
    name: 'APSA_FECHACREACION',
    nullable: true,
    default: () => 'sysdate',
  })
  APSA_FECHACREACION: Date | null;

  @Column('number', { name: 'USUA_USUA' })
  USUA_USUA: number;

  @Column('number', { name: 'EMPR_HOMOLOGACION', nullable: true })
  EMPR_HOMOLOGACION: number | null;

  @Column('number', { name: 'APSA_EXISTEET', default: () => '0' })
  APSA_EXISTEET: number;

  @Column('number', { name: 'APSA_TIPOPROGRESIV', nullable: true })
  APSA_TIPOPROGRESIV: number | null;

  @Column('number', { name: 'APSA_RESOLUCION', nullable: true })
  APSA_RESOLUCION: number | null;

  @Column('number', { name: 'APSA_VIAT', nullable: true, scale: 0 })
  APSA_VIAT: number | null;

  @Column('number', {
    name: 'APSA_SOLORELL',
    nullable: true,
    default: () => '0',
  })
  APSA_SOLORELL: number | null;

  @Column('varchar2', {
    name: 'APSA_DESCRIPCION',
    length: 200,
    default: () => '0',
  })
  APSA_DESCRIPCION: string;

  //   @OneToMany(() => AucoApsdescost, (aucoApsdescost) => aucoApsdescost.apsa)
  //   aucoApsdescosts: AucoApsdescost[];

  //   @OneToMany(() => AucoApsemprdivi, (aucoApsemprdivi) => aucoApsemprdivi.apsa)
  //   aucoApsemprdivis: AucoApsemprdivi[];

  //   @OneToMany(
  //     () => AucoCertcomercial,
  //     (aucoCertcomercial) => aucoCertcomercial.apsa
  //   )
  //   aucoCertcomercials: AucoCertcomercial[];
}
