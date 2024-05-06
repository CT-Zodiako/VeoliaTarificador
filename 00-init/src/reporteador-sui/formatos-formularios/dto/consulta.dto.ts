import { IsNumber } from 'class-validator';

export class ConsultaDTO {
  @IsNumber()
  APSA_ID: number;
  @IsNumber()
  ANNO: number
  @IsNumber()
  MES:number;
}
