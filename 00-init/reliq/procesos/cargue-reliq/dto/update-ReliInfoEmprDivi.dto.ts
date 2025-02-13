import { Type } from "class-transformer";
import { IsArray, IsNumber, ValidateNested } from "class-validator";

export class UpdateReliInfoEmprDiviDTO {

    @IsNumber()
    inedId: number;
    
    @IsNumber()
    reliId: number;
       
    @IsNumber()
    diviDivi: number;
    
    @IsNumber()
    inedCblj: number;
    
    @IsNumber()
    inedLblj: number;
    
    @IsNumber()
    inedN: number;
    
    @IsNumber()
    inedM3Agua: number;
    
    @IsNumber()
    inedCp: number;
    
    @IsNumber()
    inedM2Ccj: number;
    
    @IsNumber()
    inedM2Lavj: number;
    
    @IsNumber()
    inedTij: number;
    
    @IsNumber()
    inedKlpj: number;
    
    @IsNumber()
    inedTmj: number;
    
    @IsNumber()
    inedClavj: number;
    
    @IsNumber()
    inedQrtj: number;
    
    @IsNumber()
    inedQrsj: number;
    
}


export class UpdateReliInfoEmprDiviArrayDTO {
   @IsArray()
   @ValidateNested({ each: true })
   @Type(() => UpdateReliInfoEmprDiviDTO)
   data: UpdateReliInfoEmprDiviDTO[];
 }


