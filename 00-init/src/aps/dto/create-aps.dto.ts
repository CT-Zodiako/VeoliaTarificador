import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateApsDTO {
  @IsString()
  APSA_NUAP: string | null;

  @IsString()
  APSA_IDSUI: string | null;

  @IsNumber()
  APSA_ID: number;

  @IsString()
  APSA_NOMAPS: string;

  @IsNumber()
  APSA_ESTADO: number;

  @IsNumber()
  APSA_PROPIO: number;

  @IsOptional()
  @IsDate()
  APSA_FECHACREACION: Date | null;

  @IsNumber()
  USUA_USUA: number;

  @IsNumber()
  EMPR_HOMOLOGACION: number | null;

  @IsNumber()
  APSA_EXISTEET: number;

  @IsNumber()
  APSA_TIPOPROGRESIV: number | null;

  @IsNumber()
  APSA_RESOLUCION: number | null;

  @IsNumber()
  APSA_VIAT: number | null;

  @IsNumber()
  APSA_SOLORELL: number | null;

  @IsString()
  APSA_DESCRIPCION: string;
}
