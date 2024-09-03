import { PartialType } from '@nestjs/mapped-types';
import { CreateCrecimientoVaraibleDto } from './create-crecimiento-varaible.dto';

export class UpdateCrecimientoVaraibleDto extends PartialType(CreateCrecimientoVaraibleDto) {}
