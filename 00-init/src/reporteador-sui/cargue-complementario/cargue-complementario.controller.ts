import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CargueComplementarioService } from './cargue-complementario.service';
import { CreateCargueComplementarioDto } from './dto/create-cargue-complementario.dto';
import { UpdateCargueComplementarioDto } from './dto/update-cargue-complementario.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('cargue-complementario')
export class CargueComplementarioController {
  constructor(private readonly cargueComplementarioService: CargueComplementarioService) {}



  @Get("traerEmpresasPropias")
  traerEmpresasPropias(@Query() data) {
    return this.cargueComplementarioService.traerEmpresasPropias(data);
  }

  @Post('cargueInfComplemento')
  cargueInfComplemento(@GetUser() user, @Body() data) {
    return this.cargueComplementarioService.cargueInfComplemento(data, user.SISU_ID);
  }


}
