import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FacturacionInformesComercialesService } from './facturacion-informes-comerciales.service';

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
}
