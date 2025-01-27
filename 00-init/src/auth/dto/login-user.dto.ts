import {
  IsEmail,
  IsNumber,
  IsString,
} from 'class-validator';

export class LoginUserDTO {
  @IsString()
  @IsEmail()
  sisuCorreo: string;

  @IsString()
  sisuPass: string;

  @IsNumber()
  idSistema: number;
}
