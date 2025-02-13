import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from "class-validator";

export class UpdateReliInfoApsEmprDiviDTO{
   @IsNumber()
   iaedId: number;
 
   @IsNumber()
   reliId: number;
  
   @IsNumber()
   diviDivi: number;
 
   @IsNumber()
   iaedQrtz: number;
 
   @IsNumber()
   iaedCpe: number;
 
   @IsNumber()
   iaedT: number;
 
   @IsNumber()
   iaedVacrtabc: number;
 
   @IsNumber()
   iaedVacrt: number;
 
   @IsNumber()
   iaedCrtz: number;
 
   @IsNumber()
   iaedQbl: number;
 
   @IsNumber()
   iaedQlu: number;
 
   @IsNumber()
   iaedQr: number;
 
   @IsNumber()
   iaedTafa: number;
 
   @IsNumber()
   iaedNd: number;
 
   @IsNumber()
   iaedNa: number;
 
   @IsNumber()
   iaedQna: number;
 
   @IsNumber()
   iaedTafna: number;
 
   @IsNumber()
   iaedQa: number;
   
   @IsNumber()
   iaedAprovecha: number;
   
   @IsNumber()
   iaedQalmacen: number;
   
   @IsNumber()
   iaedCpeet: number;
   
   @IsNumber()
   iaedQrtet: number;
   
   @IsNumber()
   iaedCrtcomp: number;
   
   @IsNumber()
   iaedCdfcomp: number;
   
   @IsNumber()
   iaedQrscomp: number;
   
   @IsNumber()
   @IsNotEmpty()
   iaedNaa: number;
   
   @IsNumber()
   iaedNda: number;
   
}

export class UpdateReliInfoApsEmprDiviArrayDTO {
   @IsArray()
   @ValidateNested({ each: true })
   @Type(() => UpdateReliInfoApsEmprDiviDTO)
   data: UpdateReliInfoApsEmprDiviDTO[];
 }