import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostoPodaService } from './costo-poda.service';


@Controller('costo-poda')
export class CostoPodaController {
  constructor(private readonly costoPodaService: CostoPodaService) {}


  @Get()
  findByAps(@Body() body) {
    return this.costoPodaService.findByAps(body.APS_ID);
  }

}
