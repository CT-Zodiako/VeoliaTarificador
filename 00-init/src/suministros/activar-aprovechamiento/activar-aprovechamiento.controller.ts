import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ActivarAprovechamientoService } from './activar-aprovechamiento.service';
import { CreateActivarAprovechamientoDto } from './dto/create-activar-aprovechamiento.dto';
import { UpdateActivarAprovechamientoDto } from './dto/update-activar-aprovechamiento.dto';
import { consultaDTO } from './dto/consulta.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('activar-aprovechamiento')
export class ActivarAprovechamientoController {
  constructor(private readonly activarAprovechamientoService: ActivarAprovechamientoService) {}

  @Post()
  @UseGuards(AuthGuard())
  createAprovechamiento(@Body() data, @GetUser() user) {
    console.log({data,user})
    return this.activarAprovechamientoService.create(data,user.SISU_ID);
  }

  @Get()
  getAprovechamiento(@Query() data) {
    return this.activarAprovechamientoService.findOneAprovechamiento(data);
  }

  @Patch()
  update(@Body() data) {
    return this.activarAprovechamientoService.upAprovechamiento(data);
  }
}
