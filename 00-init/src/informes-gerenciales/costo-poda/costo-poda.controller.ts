import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CostoPodaService } from './costo-poda.service';


@Controller('costo-poda')
export class CostoPodaController {
  constructor(private readonly costoPodaService: CostoPodaService) {}


  @Get()
  findByAps(@Query() body) {
    return this.costoPodaService.findByAps(body.APS_ID);
  }

}
