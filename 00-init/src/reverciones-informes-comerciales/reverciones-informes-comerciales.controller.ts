import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RevercionesInformesComercialesService } from './reverciones-informes-comerciales.service';
import { CreateRevercionesInformesComercialeDto } from './dto/create-reverciones-informes-comerciale.dto';
import { UpdateRevercionesInformesComercialeDto } from './dto/update-reverciones-informes-comerciale.dto';

@Controller('reverciones-informes-comerciales')
export class RevercionesInformesComercialesController {
  constructor(private readonly revercionesInformesComercialesService: RevercionesInformesComercialesService) {}



  @Get()
  findAll() {
    return this.revercionesInformesComercialesService.findAll();
  }

  
}
