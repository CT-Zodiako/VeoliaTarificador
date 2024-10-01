import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { SemestralService } from './semestral.service';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('semestral')
export class SemestralController {
  constructor(private readonly semestralService: SemestralService) {}

  @Get('consultaPropias')
  consultaPropias(@Query() data) {
    return this.semestralService.consultaPropias(data);
  }

  @Post('carguePropia')
  @UseGuards(AuthGuard())
  carguePropia(@Body() data, @GetUser() usuario) {
    console.log('data',data);
    return this.semestralService.carguePropia(data,usuario.SISU_ID);
  }

  @Post('cargueInfCompetidor')
  @UseGuards()
  cargueInfCompetidor(@Query() data, @GetUser() usuario) {
    return this.semestralService.cargueInfCompetidor(data,usuario.SISU_ID);
  }

  @Post('cargueUsuarios')
  @UseGuards()
  cargueUsuarios(@Query() data, @GetUser() usuario) {
    return this.semestralService.cargueUsuarios(data,usuario.SISU_ID);
  }

  @Post('cargueTerceros')
  @UseGuards()
  cargueTerceros(@Query() data, @GetUser() usuario) {
    return this.semestralService.cargueTerceros(data,usuario.SISU_ID);
  }



}
