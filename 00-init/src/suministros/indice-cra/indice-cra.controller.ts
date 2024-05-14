import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { IndiceCraService } from './indice-cra.service';
import { ConsultaDTO } from './dto/consulta.dto';
import { CreateIndiceCraDTO } from './dto/create-indice-cra.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { UpDateIndiceCraDTO } from './dto/update-indice-cra.dto';

@Controller('indice-cra')
export class IndiceCraController {
  constructor(private readonly indiceCraService: IndiceCraService) {}



  @Get()
  findOne(@Body() consultaDTO:ConsultaDTO) {
    return this.indiceCraService.findOne(consultaDTO);
  }


  @Post()
  @UseGuards(AuthGuard())
  create(@GetUser() user, @Body() createIndiceCraDTO: CreateIndiceCraDTO[]) {
    return this.indiceCraService.create(user.SISU_ID,createIndiceCraDTO);
  }

  @Patch()
  upDate(@Body() upDateIndiceCraDTO: UpDateIndiceCraDTO[]) {
    return this.indiceCraService.upDate(upDateIndiceCraDTO);
  }





}
