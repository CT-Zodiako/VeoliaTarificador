import { IsNumber, IsOptional } from 'class-validator';

export class UpdateIndicesCraDTO {
  @IsOptional()
  @IsNumber()
  PARA_INDICE20011: number;
  @IsOptional()
  @IsNumber()
  INDI_ANNO: number;
  @IsOptional()
  @IsNumber()
  INDI_MES: number;
  @IsOptional()
  @IsNumber()
  INDI_VALOR: number;
  @IsOptional()
  @IsNumber()
  INDI_MITADVALOR: number;
}
