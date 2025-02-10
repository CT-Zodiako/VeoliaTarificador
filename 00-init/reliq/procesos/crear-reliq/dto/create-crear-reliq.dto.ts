import { IsNumber, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateReliquidaDto {
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
  relqestado?: number;

  @IsDateString()
  @IsOptional()
  relqfecha?: string;

  @IsNumber()
  @IsOptional()
  relqidatt?: number;

  @IsNumber()
  relqusuaprueba: number;
}