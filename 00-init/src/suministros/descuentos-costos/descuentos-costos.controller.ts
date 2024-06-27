import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { DescuentosCostosService } from './descuentos-costos.service';
import { CreateDescuentosCostoDto } from './dto/create-descuentos-costo.dto';
import { UpdateDescuentosCostoDto } from './dto/update-descuentos-costo.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('descuentos-costos')
export class DescuentosCostosController {
  constructor(private readonly descuentosCostosService: DescuentosCostosService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() data, @GetUser() user) {
    return this.descuentosCostosService.create(data, user.SISU_ID);
  }

  

  @Get()
  findDescuento(@Query() data) {
    return this.descuentosCostosService.findDescuento(data);
  }


  @Get('selector-new-descuento')
  selectorNewDescuento(@Query() data) {
    return this.descuentosCostosService.selectorNewDescuento(data);
  }

  @Patch()
  updateDescuento(@Body() data) {
    return this.descuentosCostosService.updateDescuento(data);
  }



}
