import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PgirsVariablesService } from './pgirs-variables.service';
import { ConsultaDTO } from './dto/consulta.dto';
import { CrearDTO } from './dto/crear.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('pgirs-variables')
export class PgirsVariablesController {
  constructor(private readonly pgirsVariablesService: PgirsVariablesService) {}

  @Get('getVariablesPgirs')
  getVariablesPgirs(@Body() consultaDTO:ConsultaDTO){
    return this.pgirsVariablesService.getVariablesPgirs(consultaDTO)
  }
  @Post()
  @UseGuards(AuthGuard())
  createVariable(@GetUser() user, @Body() createDTO:CrearDTO){
    return this.pgirsVariablesService.createVaraible(createDTO,user.SISU_ID)
  }
}
