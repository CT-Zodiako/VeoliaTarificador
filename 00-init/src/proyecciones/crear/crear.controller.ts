import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CrearService } from './crear.service';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('crear')
export class CrearController {
  constructor(private readonly crearService: CrearService) {}

  @Post('crearProyeccion')
  crearProyeccion(@Body() data ,@GetUser() usuario) {
    return this.crearService.crearProyeccion(data,usuario.SISU_ID);
  }

  @Get('consultaProyecciones')
  consultaProyecciones() {
    return this.crearService.consultaProyecciones();
  }

  @Get('consultarPorId')
  consultarPorId(@Query() data,) {
    return this.crearService.consultarPorId(data );
  }

  @Patch('editarProyeccion')
  editarProyeccion(@Body() data) {
    return this.crearService.editarProyeccion(data);
  }

  @Get('ultimasTarifas')
  ultimasTarifas(@Query() data) {
    return this.crearService.ultimasTarifas(data);

  }


}
