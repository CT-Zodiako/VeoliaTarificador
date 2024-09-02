import { PartialType } from '@nestjs/mapped-types';
import { CreateCrearDto } from './create-crear.dto';

export class UpdateCrearDto extends PartialType(CreateCrearDto) {}
