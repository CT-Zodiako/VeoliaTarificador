import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DetalladoTarifasService } from './detallado-tarifas.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('detallado-tarifas')
export class DetalladoTarifasController {
  constructor(private readonly detalladoTarifasService: DetalladoTarifasService) {}
  
  @Get()
  findOne(@Query() consultaDTO) {
    return this.detalladoTarifasService.findOne(consultaDTO);
  }  


}
