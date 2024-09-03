import { PartialType } from '@nestjs/mapped-types';
import { CreateSubsidiosContribucioneDto } from './create-subsidios-contribucione.dto';

export class UpdateSubsidiosContribucioneDto extends PartialType(CreateSubsidiosContribucioneDto) {}
