import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { LineasTiempoService } from './lineas-tiempo.service';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('lineas-tiempo')
export class LineasTiempoController {
  constructor(private readonly lineasTiempoService: LineasTiempoService) {}

  @Post('crearLineasTiempo')
  @UseGuards(AuthGuard())
  crearLineasTiempo(@Body() data, @GetUser() usuario) {
    return this.lineasTiempoService.crearLineasTiempo(data,usuario.SISU_ID);
  }

  @Get('consultarPorId')
  consultarPorId(@Query() data,) {    
    return this.lineasTiempoService.consultarPorId(data );
  }
}

