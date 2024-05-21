import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReversionesSuministrosService } from './reversiones-suministros.service';


@Controller('reversiones-suministros')
export class ReversionesSuministrosController {
  constructor(private readonly reversionesSuministrosService: ReversionesSuministrosService) {}

  @Post()
  create() {
    const aps = 1011;
    const anno = 2024;
    const mes = 10;
    const valor = 'hola';
    const usuario = 9;
    return this.reversionesSuministrosService.create(aps, anno, mes, valor, usuario);
  }


}
