import { PartialType } from '@nestjs/mapped-types';
import { CreateMensualDto } from './create-mensual.dto';

export class UpdateMensualDto extends PartialType(CreateMensualDto) {}
