import { PartialType } from '@nestjs/mapped-types';
import { CreateDescuentosCostoDto } from './create-descuentos-costo.dto';

export class UpdateDescuentosCostoDto extends PartialType(CreateDescuentosCostoDto) {}
