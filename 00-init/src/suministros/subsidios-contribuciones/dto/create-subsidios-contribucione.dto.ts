import { IsNumber } from "class-validator";

export class CreateSubsidiosContribucioneDto {
    @IsNumber()
    APSA_ID: number;
  
    @IsNumber()
    DIVI_DIVI: number;
  
    @IsNumber()
    CLAS_CLASE: number;
  
    @IsNumber()
    SUCO_ANNO: number;
  
    @IsNumber()
    SUCO_MES: number;
  
    @IsNumber()
    PARA_TIPPRED20016: number;
  
    @IsNumber()
    SUCO_VALOR: number;
  
    @IsNumber()
    SUCO_ESTADO: number;

}
