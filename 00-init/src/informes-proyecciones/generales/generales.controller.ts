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


  @Get('getProyeccionByAPS')
  proyeccionByAPS(@Query() body){
    return this.generalesService.getProyeccionByAPS(body);
  }

  @Get('energia')
  energia(@Query() consultaDTO) {
    return this.generalesService.getEnergia(consultaDTO);
  }

  @Get('acueducto')
  acueducto(@Query() consultaDTO) {
    return this.generalesService.getAcueducto(consultaDTO);
  }

  @Get('costos')
  costos(@Query() consultaDTO) {
    return this.generalesService.getCostos(consultaDTO);
  }

  @Get('tarifas')
  tarifas(@Query() consultaDTO) {
    return this.generalesService.getTarifas(consultaDTO);
  }
}
