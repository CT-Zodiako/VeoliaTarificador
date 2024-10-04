import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { MensualService } from './mensual.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('mensual')
export class MensualController {
  constructor(private readonly mensualService: MensualService) {}

  @Get('consultaPropias')
  consultaPropias(@Query() data) {
    return this.mensualService.consultaPropias(data);
  }

  @Post('carguePropias')
  @UseGuards(AuthGuard())
  carguePropias(@Body() data, @GetUser() usuario) {
    return this.mensualService.carguePropias(data,usuario.SISU_ID);
  }

  @Post('cargueInfCompetidor')
  @UseGuards(AuthGuard())
  cargueInfCompetidor(@Body() data, @GetUser() usuario) {
    return this.mensualService.cargueInfCompetidor(data,usuario.SISU_ID);
  }

  @Post('cargueUsuarios')
  @UseGuards(AuthGuard())
  cargueUsuarios(@Body() data, @GetUser() usuario) {
    return this.mensualService.cargueUsuarios(data,usuario.SISU_ID);
  }

    
}
