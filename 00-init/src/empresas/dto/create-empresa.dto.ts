import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEmpresaDTO {
  @IsString()
  EMPR_NUAP: string;

  @IsString()
  EMPR_NOMBRE: string | null;

  @IsString()
  EMPR_ESTADO: string | null;

  @IsNumber()
  EMPR_PROPIA: number;

}
