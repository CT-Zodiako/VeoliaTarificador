import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { AjusteProductividadService } from './ajuste-productividad.service';
import { CreateAjusteProductividadDto } from './dto/create-ajuste-productividad.dto';
import { UpdateAjusteProductividadDto } from './dto/update-ajuste-productividad.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('ajuste-productividad')
export class AjusteProductividadController {
  constructor(private readonly ajusteProductividadService: AjusteProductividadService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() data , @GetUser() user) {
    return this.ajusteProductividadService.create(data, user.SISU_ID);
  }

  @Get()
  findOne(@Query() data){
    return this.ajusteProductividadService.findProductividad(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAjusteProductividadDto: UpdateAjusteProductividadDto) {
    return this.ajusteProductividadService.update(+id, updateAjusteProductividadDto);
  }


}
