import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ResumenFormatosFormulariosService } from './resumen-formatos-formularios.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('resumen-formatos-formularios')
export class ResumenFormatosFormulariosController {
  constructor(private readonly resumenFormatosFormulariosService: ResumenFormatosFormulariosService) {}

  @Get('f19')
  getF19(@Query() consultaDTO){
    return this.resumenFormatosFormulariosService.getF19(consultaDTO)
  }

  
  @Get('f23')
  getF23(@Query() consultaDTO){
    return this.resumenFormatosFormulariosService.get23(consultaDTO)
  }

  @Get('f24')
  getF24(@Query() consultaDTO){
    return this.resumenFormatosFormulariosService.get24(consultaDTO)
  }

  @Get('f35')
  getF35(@Query() consultaDTO){
    return this.resumenFormatosFormulariosService.get35(consultaDTO)
  }

  @Get('f36')
  getF36(@Query() consultaDTO){
    return this.resumenFormatosFormulariosService.get36(consultaDTO)
  }

}
