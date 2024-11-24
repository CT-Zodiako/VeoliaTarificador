import { PartialType } from '@nestjs/mapped-types';
import { CreateCargueComplementarioDto } from './create-cargue-complementario.dto';

export class UpdateCargueComplementarioDto extends PartialType(CreateCargueComplementarioDto) {}
