import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { VariablesPgirsService } from './variables-pgirs.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('variables-pgirs')
export class VariablesPgirsController {
  constructor(private readonly variablesPgirsService: VariablesPgirsService) {}

  @Get('informePgirsClus')
  informePgirsClus(@Query() Body) {
    console.log(Body.APSA_ID);
    return this.variablesPgirsService.informePgirsClus(Body.APSA_ID);
  }

  @Get('informePgirsBarridos')
  informePgirsBarridos(@Query() Body) {
    return this.variablesPgirsService.informePgirsBarridos(Body.APSA_ID);
  }
}
