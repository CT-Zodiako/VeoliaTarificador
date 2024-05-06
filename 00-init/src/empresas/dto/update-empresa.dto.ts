import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdataEmpresaDTO {
  @IsString()
  EMPR_NUAP: string;

  @IsNumber()
  EMPR_EMPR: number;

  @IsString()
  EMPR_NOMBRE: string | null;

  @IsString()
  EMPR_ESTADO: string | null;

  @IsNumber()
  EMPR_PROPIA: number;
  
}
