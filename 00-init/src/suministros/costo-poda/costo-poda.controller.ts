import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CostoPodaService } from './costo-poda.service';
import { CreateCostoPodaDto } from './dto/create-costo-poda.dto';
import { UpdateCostoPodaDto } from './dto/update-costo-poda.dto';

@Controller('costo-poda-suminitro')
export class CostoPodaController {
  constructor(private readonly costoPodaService: CostoPodaService) {}

  @Get()
  findPoda(@Query() data) {
    console.log(data)
    return this.costoPodaService.findPoda(data);
  }
  @Patch()
  update(@Body() data) {
    return this.costoPodaService.upPoda(data);
  }

}
