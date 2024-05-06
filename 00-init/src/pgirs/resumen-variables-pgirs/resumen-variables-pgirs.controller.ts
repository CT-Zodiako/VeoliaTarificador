import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumenVariablesPgirsService } from './resumen-variables-pgirs.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('resumen-variables-pgirs')
export class ResumenVariablesPgirsController {
  constructor(private readonly resumenVariablesPgirsService: ResumenVariablesPgirsService) {}

  @Get('resumenVariables')
  informePgirsClus(@Body() consultaDTO: ConsultaDTO) {
    return this.resumenVariablesPgirsService.resumenVariables(consultaDTO);
  }
}
