import { IsNumber, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateReliquidaDto {
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