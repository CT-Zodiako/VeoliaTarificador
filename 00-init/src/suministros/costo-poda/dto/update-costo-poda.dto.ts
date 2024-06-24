import { PartialType } from '@nestjs/mapped-types';
import { CreateCostoPodaDto } from './create-costo-poda.dto';

export class UpdateCostoPodaDto extends PartialType(CreateCostoPodaDto) {}
