import { IsNumber, IsString } from 'class-validator';

export class CreateApsDTO {
  @IsString()
  APSA_NOMAPS: string;

  @IsNumber()
  APSA_PROPIO: number;

  @IsNumber()
  APSA_RESOLUCION: number;

  @IsNumber()
  APSA_SOLORELL: number;
  
  @IsNumber()
  APSA_ESTADO: number;

  @IsString()
  APSA_IDSUI: string ;
  ////

}
