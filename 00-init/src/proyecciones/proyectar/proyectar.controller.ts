import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ProyectarService } from './proyectar.service';
import { CreateProyectarDto } from './dto/create-proyectar.dto';
import { UpdateProyectarDto } from './dto/update-proyectar.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('proyectar')
export class ProyectarController {
  constructor(
    private readonly proyectarService: ProyectarService) {}

  @Post()
  @UseGuards(AuthGuard())
  ejecutarProyectar(@GetUser() user,@Body() data) {
    return this.proyectarService.ejecutarProyectar(data,user.SISU_ID);
  }

  @Get()
  consultarProyeccionId(@Query() data) {
    return this.proyectarService.consultarProyeccionId(data);
  }

  @Get("consultarProyeccionUsuario")
  consultarProyeccionUsuario(@Query() data) {
    return this.proyectarService.consultarProyeccionUsuario(data);
  }

  @Get("consultarProyeccionInfoPropia")
  consultarProyeccionInfoPropia(@Query() data) {
    return this.proyectarService.consultarProyeccionInfoPropia(data);
  }

  @Get("consultarProyeccionInfoTercero")
  consultarProyeccionInfoTercero(@Query() data) {
    return this.proyectarService.consultarProyeccionInfoTercero(data);
  }

}
