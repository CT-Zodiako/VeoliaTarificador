import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEmpresaDTO {
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

  @IsOptional()
  EMPR_FECHACREACION: Date | null;

  @IsNumber()
  USUA_USUA: number;
}
