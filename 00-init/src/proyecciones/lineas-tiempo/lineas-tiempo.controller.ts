import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LineasTiempoService } from './lineas-tiempo.service';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('lineas-tiempo')
export class LineasTiempoController {
  constructor(private readonly lineasTiempoService: LineasTiempoService) {}

  @Post('crearLineasTiempo')
  crearLineasTiempo(@Body() data, @GetUser() usuario) {
    return this.lineasTiempoService.crearLineasTiempo(data,usuario.SISU_ID);
  }

  @Get('consultarPorId')
  consultarPorId(@Query() data,) {
    return this.lineasTiempoService.consultarPorId(data );
  }
}

