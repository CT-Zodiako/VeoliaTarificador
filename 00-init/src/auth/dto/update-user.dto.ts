import {
  IsEmail,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateUserDTO {
  @IsNumber()
  sisuId: number;

  @IsOptional()
  @IsString()
  @MinLength(1)
  sisuNombres: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  sisuApellidos: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  sisuCorreo: string;

  @IsOptional()
  @IsString()
  sisuPass: string;

  @IsOptional()
  @IsIn([0, 1])
  sisuEstado: number;
}
