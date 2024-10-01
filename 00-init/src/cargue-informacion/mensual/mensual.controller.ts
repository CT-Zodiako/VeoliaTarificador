import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MensualService } from './mensual.service';

@Controller('mensual')
export class MensualController {
  constructor(private readonly mensualService: MensualService) {}

  @Get('consultaPropias')
  consultaPropias(@Query() data) {
    return this.mensualService.consultaPropias(data);
  }

  @Post('carguePropias')
  carguePropias(@Query() data) {
    return this.mensualService.carguePropias(data);
  }

    
}
