import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CargueReliqService } from './cargue-reliq.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { UpdateReliInfoEmprDiviArrayDTO } from './dto/update-ReliInfoEmprDivi.dto';
import {UpdateReliInfoApsEmprDiviArrayDTO} from './dto/update-ReliInfoApsEmprDivi.dto';
import { UpdateReliInfoApsRellenoArrayDTO } from './dto/update-ReliInfoApsRelleno.dto';
import { UpdateReliInfoAdicionalArrayDTO } from './dto/update-ReliInfoAdicional.dto';
import { UpdateReliInfUsuApSemprDiviArrayDTO } from './dto/update-ReliInfUsuApSemprDivi.dto';


@Controller('cargue-reliq')
export class CargueReliqController {
  constructor(private readonly cargueReliqService: CargueReliqService) {}

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

  @Patch("update-resumen-empresa")
  @UseGuards(AuthGuard())
  updateResumenEmpresa(@GetUser() user, @Body() updateReliInfoEmprDiviArrayDTO: UpdateReliInfoEmprDiviArrayDTO) {
    return this.cargueReliqService.updateResumenEmpresa(user.SISU_ID, updateReliInfoEmprDiviArrayDTO);
  }
  @Patch("update-resumen-aps")
  @UseGuards(AuthGuard())
  updateResumenAps(@GetUser() user, @Body() updateReliInfoEmprDiviDTO: UpdateReliInfoApsEmprDiviArrayDTO) {
    return this.cargueReliqService.updateResumenAPS(user.SISU_ID, updateReliInfoEmprDiviDTO);
  }

  @Patch("update-resumen-relleno")
  @UseGuards(AuthGuard())
  updateResumenRellno(@GetUser() user, @Body() UpdateReliInfoApsRellenoArrayDTO: UpdateReliInfoApsRellenoArrayDTO) {
    return this.cargueReliqService.updateResumenRellno(user.SISU_ID, UpdateReliInfoApsRellenoArrayDTO);
  }

  @Patch("update-resumen-adicional")
  @UseGuards(AuthGuard())
  updateResumenAdicional(@GetUser() user, @Body() UpdateReliInfoAdicionalArrayDTO: UpdateReliInfoAdicionalArrayDTO) {
    return this.cargueReliqService.updateResumenAdicional(user.SISU_ID, UpdateReliInfoAdicionalArrayDTO);
  }

  @Patch("update-resumen-usuarios")
  @UseGuards(AuthGuard())
  updateReliInfoUsuarios(@GetUser() user, @Body() UpdateReliInfUsuApSemprDiviArrayDTO: UpdateReliInfUsuApSemprDiviArrayDTO) {
    return this.cargueReliqService.updateReliInfoUsuarios(user.SISU_ID, UpdateReliInfUsuApSemprDiviArrayDTO);
  }

}
