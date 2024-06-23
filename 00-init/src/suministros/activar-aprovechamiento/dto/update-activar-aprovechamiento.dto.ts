import { PartialType } from '@nestjs/mapped-types';
import { CreateActivarAprovechamientoDto } from './create-activar-aprovechamiento.dto';

export class UpdateActivarAprovechamientoDto extends PartialType(CreateActivarAprovechamientoDto) {}
