import { Type } from "class-transformer";
import { IsArray, IsNumber, ValidateNested } from "class-validator";

export class UpdateReliInfoApsRellenoDTO {
  @IsNumber()  
  iareId: number;
  @IsNumber()
  reliId: number;
  @IsNumber()
  iareQrs: number;
  @IsNumber()
  iareCdfk: number;
  @IsNumber()
  iareVacdfabc: number;
  @IsNumber()
  iareVacdf: number;
  @IsNumber()
  iareVl: number;
  @IsNumber()
  iareCtmlx: number;
  @IsNumber()
  iareCtlk: number;
  @IsNumber()
  iareVactlabc: number;
  @IsNumber()
  iareVactl: number;
  @IsNumber()
  iareEscenario: number;
  @IsNumber()
  iareC: number;
}

export class UpdateReliInfoApsRellenoArrayDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateReliInfoApsRellenoDTO)
  data: UpdateReliInfoApsRellenoDTO[];
}