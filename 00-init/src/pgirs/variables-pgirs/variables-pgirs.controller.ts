import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VariablesPgirsService } from './variables-pgirs.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('variables-pgirs')
export class VariablesPgirsController {
  constructor(private readonly variablesPgirsService: VariablesPgirsService) {}

  @Get('informePgirsClus')
  informePgirsClus(@Body() consultaDTO: ConsultaDTO) {
    return this.variablesPgirsService.informePgirsClus(consultaDTO);
  }

  @Get('informePgirsBarridos')
  informePgirsBarridos(@Body() consultaDTO: ConsultaDTO) {
    return this.variablesPgirsService.informePgirsBarridos(consultaDTO);
  }
}
