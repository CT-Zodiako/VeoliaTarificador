import { IsNumber, IsOptional } from 'class-validator';

export class ConsultaDTO {
  @IsNumber()
  APSA_ID: number;

  @IsOptional()
  @IsNumber()
  ANNO: number;

  @IsOptional()
  @IsNumber()
  MES: number;
}
