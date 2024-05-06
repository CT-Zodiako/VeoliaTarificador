import {
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @MinLength(1)
  sisuNombres: string;

  @IsString()
  @MinLength(1)
  sisuApellidos: string;

  @IsString()
  @IsEmail()
  sisuCorreo: string;

  @IsString()
  sisuPass: string;

  @IsOptional()
  @IsIn([0, 1])
  sisuEstado: number;
}
