import { PartialType } from '@nestjs/mapped-types';
import { CreateReliquidaDto } from './create-crear-reliq.dto';

export class UpdateCrearReliqDto extends PartialType(CreateReliquidaDto) {}
