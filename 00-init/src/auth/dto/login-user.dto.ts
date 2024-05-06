import {
  IsEmail,
  IsString,
} from 'class-validator';

export class LoginUserDTO {
  @IsString()
  @IsEmail()
  sisuCorreo: string;

  @IsString()
  sisuPass: string;
}
