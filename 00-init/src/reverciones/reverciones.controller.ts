import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RevercionesService } from './reverciones.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';


@Controller('reversiones')
export class RevercionesController {
  constructor(private readonly revercionesService: RevercionesService) {}

  @Post('crearAutorizacion')
  @UseGuards(AuthGuard())
  crearAutorizacion(@GetUser() user, @Body() data) {
    return this.revercionesService.crearAutorizacion(user.SISU_ID, data);
  }

  @Get('detalladoAutorizacion')
  @UseGuards(AuthGuard())
  detalladoAutorizacion(@GetUser() user) {
    return this.revercionesService.detalladoAutorizacion(user.SISU_ID);
  }

  @Post('crearReversion')
  @UseGuards(AuthGuard())
  crearReversion(@GetUser() user, @Body() data) {
    return this.revercionesService.crearReversion(data, user.SISU_ID);
  }


  @Get('detalladoReversion')
  @UseGuards(AuthGuard())
  detalladoReversion() {
    return this.revercionesService.detalladoReversion();
  }

  

}
