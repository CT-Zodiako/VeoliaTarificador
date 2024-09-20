import { PartialType } from '@nestjs/mapped-types';
import { CreateSemestralDto } from './create-semestral.dto';

export class UpdateSemestralDto extends PartialType(CreateSemestralDto) {}
