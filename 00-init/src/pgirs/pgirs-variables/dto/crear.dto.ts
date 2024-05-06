import { IsNumber } from 'class-validator';

export class CrearDTO {
  @IsNumber()
  APSAID: number;
  @IsNumber()
  PGRIANNO: number;
  @IsNumber()
  PGRIMES: number;
  @IsNumber()
  PGRIVARIABLE: number;
  @IsNumber()
  PGRIVALOR: number;
  @IsNumber()
  PGRIFRECUENCIA: number;

}
