import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('dashboardReporteador')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @UseGuards(AuthGuard())
  getDashboard(@GetUser() user , @Body() consultaDTO:ConsultaDTO){
    return this.dashboardService.getDashboard(user.SISU_ID, consultaDTO)
  }

}
