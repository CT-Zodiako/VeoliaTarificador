import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CargueReliqService } from './cargue-reliq.service';
import { CreateCargueReliqDto } from './dto/create-cargue-reliq.dto';
import { UpdateCargueReliqDto } from './dto/update-cargue-reliq.dto';

@Controller('cargue-reliq')
export class CargueReliqController {
  constructor(private readonly cargueReliqService: CargueReliqService) {}

  @Post()
  create(@Body() createCargueReliqDto: CreateCargueReliqDto) {
    return this.cargueReliqService.create(createCargueReliqDto);
  }

  @Get("resumen-empresa")
  findAll(@Query() data) {
    return this.cargueReliqService.getResumenEmpresa(data.idReliq);
  }

  @Get('resumen-aps')
  getResumenAPS(@Query() data) {
    return this.cargueReliqService.getResumenAPS(data.idReliq);
  }

  @Get('resumen-relleno')
  getResumenRelleno(@Query() data) {
    return this.cargueReliqService.getResumenRelleno(data.idReliq);
  }

  @Get('resumen-adicional')
  getReliInfoAdicional(@Query() data) {
    return this.cargueReliqService.getReliInfoAdicional(data.idReliq);
  }

  @Get('resumen-usuarios')
  getReliInfoUsuarios(@Query() data) {
    return this.cargueReliqService.getReliInfoUsuarios(data.idReliq);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCargueReliqDto: UpdateCargueReliqDto) {
    return this.cargueReliqService.update(+id, updateCargueReliqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cargueReliqService.remove(+id);
  }
}
