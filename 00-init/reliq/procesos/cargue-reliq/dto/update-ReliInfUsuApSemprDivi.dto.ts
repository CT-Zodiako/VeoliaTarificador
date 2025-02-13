import { Type } from 'class-transformer';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';

export class UpdateReliInfUsuApSemprDiviDTO {
  @IsNumber()
  iuaeId: number;
  @IsNumber()
  reliId: number;
  @IsNumber()
  diviDivi: number;
  @IsNumber()
  faprCodigo: number;
  @IsNumber()
  clasClaseUso: number;
  @IsNumber()
  paraTipTar20012: number;
  @IsNumber()
  iuaeCantidad: number;
  @IsNumber()
  iuaeToneladas: number;
  @IsNumber()
  paraUbicacion20016: number;
  @IsNumber()
  paraTipFac20014?: number;
}

export class UpdateReliInfUsuApSemprDiviArrayDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateReliInfUsuApSemprDiviDTO)
  data: UpdateReliInfUsuApSemprDiviDTO[];
}
