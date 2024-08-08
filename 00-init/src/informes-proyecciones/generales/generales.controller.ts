import {
  Controller,
  Get,
  Body,
  Query,
} from '@nestjs/common';
import { GeneralesService } from './generales.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('generales')
export class GeneralesController {
  constructor(private readonly generalesService: GeneralesService) {}


  @Get('Query')
  proyeccionByAPS(@Query() body){
    return this.generalesService.getProyeccionByAPS(body);
  }

  @Get('energia')
  energia(@Body() consultaDTO: ConsultaDTO) {
    return this.generalesService.getEnergia(consultaDTO);
  }

  @Get('acueducto')
  acueducto(@Body() consultaDTO: ConsultaDTO) {
    return this.generalesService.getAcueducto(consultaDTO);
  }

  @Get('costos')
  costos(@Body() consultaDTO: ConsultaDTO) {
    return this.generalesService.getCostos(consultaDTO);
  }

  @Get('tarifas')
  tarifas(@Body() consultaDTO: ConsultaDTO) {
    return this.generalesService.getTarifas(consultaDTO);
  }
}
