import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { IndiceCra } from '../reversiones-suministros/entities/reversiones-suministro.entity';
import * as oracledb from 'oracledb';


@Injectable()
export class ReversionesSuministrosService {
  constructor(
    @InjectRepository(IndiceCra)
    private readonly reversionesSuministrosRepository: Repository<IndiceCra>,
    private readonly connection: Connection,
  ) {}

  async create(aps: number, anno: number, mes: number, valor: string, usuario: number) {
    const sqlPL = `
      DECLARE
        res NUMBER;
      BEGIN
        res := PK_REVERSION.fauco_reversion(:aps, :mes, :anno, :valor, :usuario);
        COMMIT;
        :result := res;
      END;
    `;

    const binds = [
      { name: 'aps', value: aps, dir: oracledb.BIND_IN, type: oracledb.NUMBER },
      { name: 'mes', value: mes, dir: oracledb.BIND_IN, type: oracledb.NUMBER },
      { name: 'anno', value: anno, dir: oracledb.BIND_IN, type: oracledb.NUMBER },
      { name: 'valor', value: valor, dir: oracledb.BIND_IN, type: oracledb.STRING },
      { name: 'usuario', value: usuario, dir: oracledb.BIND_IN, type: oracledb.NUMBER },
      { name: 'result', dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
    ];

    const result = await this.connection.query(sqlPL, binds);

    

    return {
      message: 'Reversiones Suministros creadas correctamente',
      result: result.outBinds.result, // Devolver el resultado si es necesario
    };
  }
}
