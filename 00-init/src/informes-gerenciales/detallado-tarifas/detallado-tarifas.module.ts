import { Module } from '@nestjs/common';
import { DetalladoTarifasService } from './detallado-tarifas.service';
import { DetalladoTarifasController } from './detallado-tarifas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AucoApsaseo } from './entities/detallado-tarifa.entity';

@Module({
  controllers: [DetalladoTarifasController],
  providers: [DetalladoTarifasService],
  imports: [TypeOrmModule.forFeature([AucoApsaseo])],
})
export class DetalladoTarifasModule {}
