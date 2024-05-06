import { Module } from '@nestjs/common';
import { DetalladoSubAporteService } from './detallado-sub-aporte.service';
import { DetalladoSubAporteController } from './detallado-sub-aporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AucoApsaseo } from './entities/detallado-sub-aporte.entity';

@Module({
  controllers: [DetalladoSubAporteController],
  providers: [DetalladoSubAporteService],
  imports: [TypeOrmModule.forFeature([AucoApsaseo]), AuthModule],
})
export class DetalladoSubAporteModule {}
