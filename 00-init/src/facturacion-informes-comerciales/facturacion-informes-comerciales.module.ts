import { Module } from '@nestjs/common';
import { FacturacionInformesComercialesService } from './facturacion-informes-comerciales.service';
import { FacturacionInformesComercialesController } from './facturacion-informes-comerciales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacuo_detafacturacion } from './entities/facturacion-informes-comerciale.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [FacturacionInformesComercialesController],
  providers: [FacturacionInformesComercialesService],
  imports: [TypeOrmModule.forFeature([Vacuo_detafacturacion]), AuthModule],
})
export class FacturacionInformesComercialesModule {}
