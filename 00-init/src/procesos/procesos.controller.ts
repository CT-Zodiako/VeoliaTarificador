import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ProcesosService } from './procesos.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('procesos')
export class ProcesosController {
  constructor(private readonly procesosService: ProcesosService) {}

  @Get('lbl')
  consultaLbl(@Query() data) {
    return this.procesosService.consultaLbl(data);
  }

  @Get('usuarios')
  consultaUsuarios(@Query() data) {
    return this.procesosService.consultaUsuarios(data);
  }

  @Get('qa')
  consultaQa(@Query() data) {
    return this.procesosService.consultaQa(data);
  }

  @Get('qrt')
  consultaQrt(@Query() data) {
    return this.procesosService.consultaQrt(data);
  }

  @Get('costos')
  consultaCostos(@Query() data) {
    return this.procesosService.consultaCostos(data);
  }

  @Get('calculartarifas')
  @UseGuards(AuthGuard())
  calcularTarifas(@GetUser() user @Query() data) {
    return this.procesosService.calcularTarifas(user.SISU_ID, data);
  }




  

}
