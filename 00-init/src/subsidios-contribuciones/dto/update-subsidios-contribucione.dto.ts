import { IsNumber } from 'class-validator';

export class UpdateSubsidiosContribucioneDTO {
  @IsNumber()
  APSA_ID: number;

  @IsNumber()
  CLAS_CLASE: number;

  @IsNumber()
  SUCO_ANNO: number;

  @IsNumber()
  SUCO_MES: number;

  @IsNumber()
  SUCO_VALOR: number;

}
