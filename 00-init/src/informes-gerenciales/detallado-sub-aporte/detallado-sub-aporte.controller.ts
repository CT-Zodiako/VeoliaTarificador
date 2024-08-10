import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DetalladoSubAporteService } from './detallado-sub-aporte.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('detallado-sub-aporte')
export class DetalladoSubAporteController {
  constructor(private readonly detalladoSubAporteService: DetalladoSubAporteService) {}


  @Get()
  findOne(@Query() consultaDTO) {
    return this.detalladoSubAporteService.findOne(consultaDTO);
  }
}
