import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CrearReliqService } from './crear-reliq.service';
import { CreateReliquidaDto } from './dto/create-crear-reliq.dto';
import { UpdateCrearReliqDto } from './dto/update-crear-reliq.dto';

@Controller('crear-reliq')
export class CrearReliqController {
  constructor(private readonly crearReliqService: CrearReliqService) {}

  @Post()
  create(@Body() createCrearReliqDto: CreateReliquidaDto) {
    return this.crearReliqService.create(createCrearReliqDto);
  }

  @Get()
  getReliquidaciones() {
    return this.crearReliqService.getReliquidaciones();
  }

  @Get('reliquida-by-aps')
  getReliquidacionByAps(@Query() data) {
    return this.crearReliqService.getReliquidacionByAps(data.apsId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrearReliqDto: UpdateCrearReliqDto) {
    return this.crearReliqService.update(+id, updateCrearReliqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crearReliqService.remove(+id);
  }
}
