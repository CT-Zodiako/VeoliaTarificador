import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ConsultaDTO } from './dto/consulta.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

// TODO REVISAR EN FRONt
  @Get()
  @UseGuards(AuthGuard())
  findOne(@Body() body:ConsultaDTO, @GetUser() user) {
    return this.dashboardService.findOne(body, user.SISU_ID);
  }


}
