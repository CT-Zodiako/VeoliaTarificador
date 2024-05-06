import { Module } from '@nestjs/common';
import { CostoPodaService } from './costo-poda.service';
import { CostoPodaController } from './costo-poda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vpoda_reporte } from './entities/costo-poda.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CostoPodaController],
  providers: [CostoPodaService],
  imports: [TypeOrmModule.forFeature([Vpoda_reporte]),AuthModule]
})
export class CostoPodaModule {}
