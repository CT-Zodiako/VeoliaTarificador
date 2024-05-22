import { IsNumber, IsString } from 'class-validator';

export class CreateRellenoDTO {
  @IsString()
  RELL_NOMRELLENO: string;


  @IsNumber()
  RELL_ESTADO: number;

  @IsNumber()
  RELL_PROPIO: number;

  @IsNumber()
  RELL_REGIONAL: number;

  @IsString()
  RELL_NUSD: number;
}
