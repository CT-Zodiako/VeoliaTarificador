import { PartialType } from '@nestjs/mapped-types';
import { CreateLineasTiempoDto } from './create-lineas-tiempo.dto';

export class UpdateLineasTiempoDto extends PartialType(CreateLineasTiempoDto) {}
