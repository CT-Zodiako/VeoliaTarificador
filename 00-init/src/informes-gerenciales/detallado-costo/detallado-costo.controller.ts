import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DetalladoCostoService } from './detallado-costo.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('detallado-costo')
export class DetalladoCostoController {
  constructor(private readonly detalladoCostoService: DetalladoCostoService) {}

  @Get()
  findOne(@Body() consultaDTO: ConsultaDTO) {
    return this.detalladoCostoService.findOne(consultaDTO);
  }
}
