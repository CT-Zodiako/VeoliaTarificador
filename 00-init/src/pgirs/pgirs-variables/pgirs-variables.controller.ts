import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { PgirsVariablesService } from './pgirs-variables.service';
import { ConsultaDTO } from './dto/consulta.dto';
import { CrearDTO } from './dto/crear.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('pgirs-variables')
export class PgirsVariablesController {
  constructor(private readonly pgirsVariablesService: PgirsVariablesService) {}

  @Get('getVariablesPgirs')
  getVariablesPgirs(@Query() Body){
    return this.pgirsVariablesService.getVariablesPgirs(Body)
  }
  @Post()
  @UseGuards(AuthGuard())
  createVariable(@GetUser() user, @Body() body){
    return this.pgirsVariablesService.createVaraible(body,user.SISU_ID)
  }
}
