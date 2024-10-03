import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FacturacionInformesComercialesService } from './facturacion-informes-comerciales.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('facturacion-informes-comerciales')
export class FacturacionInformesComercialesController {
  constructor(
    private readonly facturacionInformesComercialesService: FacturacionInformesComercialesService,
  ) {}

  @Get('facturacion')
  facturacion(
    @Query()
    consultaDTO,
  ) {
    return this.facturacionInformesComercialesService.facturacion(consultaDTO);
  }

  @Get('detalleFacturacion')
  facturacionDetalle(
    @Query()
    consultaDTO,
  ) {
    return this.facturacionInformesComercialesService.facturacionDetalle(consultaDTO);
  }
  @Get('facturacionClus')
  facturacionClus(
    @Query()
    consultaDTO,
  ) {
    return this.facturacionInformesComercialesService.facturacionClus(consultaDTO);
  }
  @Get('facturacionDinc')
  facturacionDinc(
    @Query()
    consultaDTO,
  ) {
    return this.facturacionInformesComercialesService.facturacionDinc(consultaDTO);
  }

  @Get('historialCertificacion')
  @UseGuards(AuthGuard())
  historialCertifacion(@Query() data, @GetUser() usuario) {
    return this.facturacionInformesComercialesService.historialCertificacion(data, usuario.SISU_ID);
  }

  @Get('historialProductividad')
  @UseGuards(AuthGuard())
  historialProductividad(@Query() data, @GetUser() usuario) {
    return this.facturacionInformesComercialesService.historialProductividad(data, usuario.SISU_ID);
  }
}
