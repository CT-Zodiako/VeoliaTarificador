import { IsNumber, IsOptional } from 'class-validator';

export class ConsultaDTO {
  @IsOptional()
  @IsNumber()
  ANNO: number;

  @IsOptional()
  @IsNumber()
  MES: number;
}
