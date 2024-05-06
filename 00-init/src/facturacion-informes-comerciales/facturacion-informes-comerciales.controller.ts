import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FacturacionInformesComercialesService } from './facturacion-informes-comerciales.service';
import { ConsultaDTO } from './dto/consulta-facturacion-informes-comerciale.dto';

@Controller('facturacion-informes-comerciales')
export class FacturacionInformesComercialesController {
  constructor(
    private readonly facturacionInformesComercialesService: FacturacionInformesComercialesService,
  ) {}

  @Get('facturacion')
  facturacion(
    @Body()
    consultaDTO: ConsultaDTO,
  ) {
    return this.facturacionInformesComercialesService.facturacion(consultaDTO);
  }

  @Get('detalleFacturacion')
  facturacionDetalle(
    @Body()
    consultaDTO: ConsultaDTO,
  ) {
    return this.facturacionInformesComercialesService.facturacionDetalle(consultaDTO);
  }
  @Get('facturacionClus')
  facturacionClus(
    @Body()
    consultaDTO: ConsultaDTO,
  ) {
    return this.facturacionInformesComercialesService.facturacionClus(consultaDTO);
  }
  @Get('facturacionDinc')
  facturacionDinc(
    @Body()
    consultaDTO: ConsultaDTO,
  ) {
    return this.facturacionInformesComercialesService.facturacionDinc(consultaDTO);
  }
}
