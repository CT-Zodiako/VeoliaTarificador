import { PartialType } from '@nestjs/mapped-types';
import { CreateRevercioneDto } from './create-revercione.dto';

export class UpdateRevercioneDto extends PartialType(CreateRevercioneDto) {}
