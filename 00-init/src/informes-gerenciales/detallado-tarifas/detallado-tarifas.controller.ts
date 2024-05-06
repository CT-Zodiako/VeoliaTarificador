import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalladoTarifasService } from './detallado-tarifas.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('detallado-tarifas')
export class DetalladoTarifasController {
  constructor(private readonly detalladoTarifasService: DetalladoTarifasService) {}
  
  @Get()
  findOne(@Body() consultaDTO:ConsultaDTO) {
    return this.detalladoTarifasService.findOne(consultaDTO);
  }  


}
