import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateApDto {
  @IsString()
  APSA_NOMAPS: string;

  @IsNumber()
  APSA_ESTADO: number;

  @IsNumber()
  APSA_PROPIO: number;

  @IsNumber()
  APSA_RESOLUCION: number;

  @IsNumber()
  APSA_SOLORELL: number;

  @IsNumber()
  APSA_VIAT: number;

  @IsString()
  APSA_IDSUI: string;

  @IsNumber()
  APSA_ID: number;
}
