import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectarDto } from './create-proyectar.dto';

export class UpdateProyectarDto extends PartialType(CreateProyectarDto) {}
