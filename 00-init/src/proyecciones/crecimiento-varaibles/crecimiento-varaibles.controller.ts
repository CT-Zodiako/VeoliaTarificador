import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrecimientoVaraiblesService } from './crecimiento-varaibles.service';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('crecimiento-varaibles')
export class CrecimientoVaraiblesController {
  constructor(private readonly crecimientoVaraiblesService: CrecimientoVaraiblesService) {}

  @Post('registrarCrecimientoUsuarios')
  registrarCrecimientoUsuarios(@Body() data, @GetUser() usuario) {
    return this.crecimientoVaraiblesService.registrarCrecimientoUsuarios(data, usuario.SISU_ID);
  }

  @Post(`registrarCrecimientoInfPropia`)
  registrarCrecimientoInfPropia(@Body() data, @GetUser() usuario) {
    return this.crecimientoVaraiblesService.registrarCrecimientoInfPropia(data, usuario.SISU_ID);
  }
  @Post(`registrarCrecimientoInfTerceros`)
  registrarCrecimientoInfTerceros(@Body() data, @GetUser() usuario) {
    return this.crecimientoVaraiblesService.registrarCrecimientoInfTerceros(data, usuario.SISU_ID);
  }
  @Get(`consultarCrecimiento`)
  consultarCrecimiento(@Body() data) {
    return this.crecimientoVaraiblesService.consultarCrecimiento(data);
  }
}
