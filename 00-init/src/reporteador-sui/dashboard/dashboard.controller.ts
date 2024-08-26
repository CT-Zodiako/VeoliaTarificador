import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('dashboardReporteador')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @UseGuards(AuthGuard())
  getDashboard(@GetUser() user , @Query() consultaDTO){
    return this.dashboardService.getDashboard(user.SISU_ID, consultaDTO)
  }

}
