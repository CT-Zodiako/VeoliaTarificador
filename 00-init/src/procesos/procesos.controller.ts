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
  @Get('costosClus')
  consultaCostosClus(@Query() data) {
    return this.procesosService.consultaCostosClus(data);
  }

  @Get('comportamientoClus')
  comportamientoClus(@Query() data) {
    return this.procesosService.comportamientoClus(data);
  }

  @Get('calculartarifas')
  @UseGuards(AuthGuard())
  calcularTarifas(@GetUser() user, @Query() data) {
    return this.procesosService.calcularTarifas(user.SISU_ID, data);
  }

  @Get('trna')
  consultarTrna(@Query() data) {
    return this.procesosService.consultarTrna(data);
  }

  
  @Get('tafna')
  consultarTafna(@Query() data) {
    return this.procesosService.consultarTafna(data);
  }

  @Get('tarifas')
  consultarTarifas(@Query() data) {
    return this.procesosService.consultarTarifas(data);
  }

  @Get('resumen')
  consultarResumen(@Query() data) {
    return this.procesosService.consultarResumen(data);
  }
  @Get('costosJson')
  consultarCostosJson(@Query() data) {
    const tipo = 1;
    return this.procesosService.consultarJson(data,tipo);
  }

  @Get('clusJson')
  consultarClusJson(@Query() data) {
    const tipo = 2;
    return this.procesosService.consultarJson(data,tipo);
  }







  

}
