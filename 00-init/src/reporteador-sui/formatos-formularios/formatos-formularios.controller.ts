import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FormatosFormulariosService } from './formatos-formularios.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('formatos-formularios')
export class FormatosFormulariosController {
  constructor(private readonly formatosFormulariosService: FormatosFormulariosService) {}


  @Get('f19')
  getF19(@Query() consultaDTO){
    return this.formatosFormulariosService.getF19(consultaDTO)
  }

  
  @Get('f23')
  getF23(@Query() consultaDTO){
    return this.formatosFormulariosService.get23(consultaDTO)
  }

  @Get('f24')
  getF24(@Query() consultaDTO){
    return this.formatosFormulariosService.get24(consultaDTO)
  }

  @Get('f35')
  getF35(@Query() consultaDTO){
    return this.formatosFormulariosService.get35(consultaDTO)
  }

  @Get('f36')
  getF36(@Query() consultaDTO){
    return this.formatosFormulariosService.get36(consultaDTO)
  }


  
}
