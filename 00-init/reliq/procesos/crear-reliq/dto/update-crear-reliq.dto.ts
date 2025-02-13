import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCrearReliqDto {
    @IsNumber()
    relqid: number;

    @IsNumber()
    apsaid: number;
    
    @IsString()
    relqnombre: string;
    
    @IsString()
    relqdescrip: string;
    
    @IsString()
    relqdesde: string;
    
    @IsString()
    relqhasta: string;
    
    @IsNumber()
    relqususolicita: number;
    
    @IsNumber()
    @IsOptional()
    relqidatt?: number;
    
    @IsNumber()
    relqusuaprueba: number;

}
