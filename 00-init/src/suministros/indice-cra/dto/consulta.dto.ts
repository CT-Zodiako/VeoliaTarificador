import { IsNumberString, IsOptional } from 'class-validator';

export class ConsultaDTO {
  @IsOptional()
  @IsNumberString()
  ANNO: string;

  @IsOptional()
  @IsNumberString()
  MES: string;
}
