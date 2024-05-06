import { IsNumber } from 'class-validator';

export class ConsultaDTO {
  @IsNumber()
  APS_ID: number;
  @IsNumber()
  ANNO: number;
  @IsNumber()
  MES: number;
}
