import { PartialType } from '@nestjs/mapped-types';
import { CreateRevercionesInformesComercialeDto } from './create-reverciones-informes-comerciale.dto';

export class UpdateRevercionesInformesComercialeDto extends PartialType(CreateRevercionesInformesComercialeDto) {}
