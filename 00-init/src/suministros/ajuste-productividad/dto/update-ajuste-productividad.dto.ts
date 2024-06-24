import { PartialType } from '@nestjs/mapped-types';
import { CreateAjusteProductividadDto } from './create-ajuste-productividad.dto';

export class UpdateAjusteProductividadDto extends PartialType(CreateAjusteProductividadDto) {}
