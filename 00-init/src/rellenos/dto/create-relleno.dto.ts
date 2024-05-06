import { IsNumber, IsString } from 'class-validator';

export class CreateRellenoDTO {
  @IsString()
  RELL_NOMRELLENO: string;

  @IsString()
  RELL_DESCRIPCION: string;

  @IsNumber()
  RELL_ESTADO: number;

  @IsNumber()
  RELL_PROPIO: number;

  @IsNumber()
  RELL_REGIONAL: number;

  @IsNumber()
  RELL_NUSD: number;
}
