import { PartialType } from '@nestjs/mapped-types';
import { CreateReversionesSuministroDto } from './create-reversiones-suministro.dto';

export class UpdateReversionesSuministroDto extends PartialType(CreateReversionesSuministroDto) {}
