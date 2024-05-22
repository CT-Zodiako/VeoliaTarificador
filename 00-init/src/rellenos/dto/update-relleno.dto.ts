import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpDataDTO {
  @IsOptional()
  @IsString()
  RELL_NOMRELLENO: string;

  @IsOptional()
  @IsNumber()
  RELL_ESTADO: number;

  @IsOptional()
  @IsNumber()
  RELL_PROPIO: number;

  @IsOptional()
  @IsNumber()
  RELL_REGIONAL: number;

  @IsOptional()
  @IsNumber()
  RELL_NUSD: number;
}
