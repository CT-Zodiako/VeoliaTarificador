import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalladoSubAporteService } from './detallado-sub-aporte.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('detallado-sub-aporte')
export class DetalladoSubAporteController {
  constructor(private readonly detalladoSubAporteService: DetalladoSubAporteService) {}


  @Get()
  findOne(@Body() consultaDTO:ConsultaDTO) {
    return this.detalladoSubAporteService.findOne(consultaDTO);
  }
}
