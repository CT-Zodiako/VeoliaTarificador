import { IsNumber } from 'class-validator';

export class ConsultaDTO {
  @IsNumber()
  ANNO: number
  @IsNumber()
  MES:number;
}
