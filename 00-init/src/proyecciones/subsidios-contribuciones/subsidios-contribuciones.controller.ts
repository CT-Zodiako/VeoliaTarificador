import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SubsidiosContribucionesService } from './subsidios-contribuciones.service';

@Controller('subsidios-contribuciones')
export class SubsidiosContribucionesController {
  constructor(private readonly subsidiosContribucionesService: SubsidiosContribucionesService) {}

  @Get('consultaSubCon')
  consultaSubCon(@Query() data) {
    return this.subsidiosContribucionesService.consultaSubCon(data);
  }

}
