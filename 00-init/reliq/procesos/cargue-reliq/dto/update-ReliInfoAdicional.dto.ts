import { Type } from "class-transformer";
import { IsArray, IsNumber, ValidateNested } from "class-validator";

export class UpdataReliInfoAdicionalDTO {
  @IsNumber()
  ceadId: number;
  @IsNumber()
  reliId: number;
  @IsNumber()
  ceadCdf: number;
  @IsNumber()
  ceadCtl: number;
}


export class UpdateReliInfoAdicionalArrayDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdataReliInfoAdicionalDTO)
  data: UpdataReliInfoAdicionalDTO[];
}