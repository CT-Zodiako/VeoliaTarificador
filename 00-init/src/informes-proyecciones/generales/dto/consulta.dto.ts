import { IsNumber } from 'class-validator';

export class ConsultaDTO {
  @IsNumber()
  APSA_ID: number;
  @IsNumber()
  PROY_ID: number;
}
