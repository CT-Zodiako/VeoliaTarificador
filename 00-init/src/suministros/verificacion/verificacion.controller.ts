import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { VerificacionService } from './verificacion.service';
import { CreateVerificacionDto } from './dto/create-verificacion.dto';

@Controller('verificacion')
export class VerificacionController {
  constructor(private readonly verificacionService: VerificacionService) {}


  @Get('resumenEmpresa')
  findResumenEmpresa(@Query() query) {
    return this.verificacionService.resumenEmpresa(query);
  }


  @Get('resumenAPS')
  findResumenAPS(@Query() query) {
    return this.verificacionService.resumenAPS(query);
  }

  @Get('resumenRelleno')
  findResumenRelleno(@Query() query) {
    return this.verificacionService.resumenRelleno(query);
  }


}
