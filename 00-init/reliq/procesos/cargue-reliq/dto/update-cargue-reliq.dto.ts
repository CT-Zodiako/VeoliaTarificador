import { PartialType } from '@nestjs/mapped-types';
import { CreateCargueReliqDto } from './create-cargue-reliq.dto';

export class UpdateCargueReliqDto extends PartialType(CreateCargueReliqDto) {}
