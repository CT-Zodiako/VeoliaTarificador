import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReversionesService } from './reversiones.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('reversiones')
export class ReversionesController {
  constructor(private readonly reversionesService: ReversionesService) {}

  @Get('f19')
  getSuiRevf19(@Body() consultaDTO:ConsultaDTO){
    return this.reversionesService.getSuiRevf19(consultaDTO)
  }

  @Get('f23')
  getSuiRevf23(@Body() consultaDTO:ConsultaDTO){
    return this.reversionesService.getSuiRevf23(consultaDTO)
  }

  @Get('f24')
  getSuiRevf24(@Body() consultaDTO:ConsultaDTO){
    return this.reversionesService.getSuiRevf24(consultaDTO)
  }

  @Get('f35')
  getSuiRevf35(@Body() consultaDTO:ConsultaDTO){
    return this.reversionesService.getSuiRevf35(consultaDTO)
  }

  @Get('f36')
  getSuiRevf36(@Body() consultaDTO:ConsultaDTO){
    return this.reversionesService.getSuiRevf36(consultaDTO)
  }

}
