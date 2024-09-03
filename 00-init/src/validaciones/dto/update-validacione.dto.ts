import { PartialType } from '@nestjs/mapped-types';
import { CreateValidacioneDto } from './create-validacione.dto';

export class UpdateValidacioneDto extends PartialType(CreateValidacioneDto) {}
