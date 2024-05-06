import { IsNumber, IsString, MinLength } from 'class-validator';

export class ChangePassUserDTO {

  @IsString()
  @MinLength(1)
  sisuPass: string;

  @IsString()
  newPass: string;

  @IsString()
  confirmPass: string;
}
