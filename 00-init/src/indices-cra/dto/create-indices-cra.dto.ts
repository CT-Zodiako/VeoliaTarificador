import { IsNumber } from 'class-validator';

export class CreateIndicesCraDto {
  @IsNumber()
  PARA_INDICE20011: number;
  @IsNumber()
  INDI_ANNO: number;
  @IsNumber()
  INDI_MES: number;
  @IsNumber()
  INDI_ESTADO: number;
  @IsNumber()
  INDI_VALOR: number;
  @IsNumber()
  INDI_MITADVALOR: number;
}
