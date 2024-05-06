import { Module } from '@nestjs/common';
import { GeneralesService } from './generales.service';
import { GeneralesController } from './generales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vpoda_reporte } from './entities/generale.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [GeneralesController],
  providers: [GeneralesService],
  imports:[TypeOrmModule.forFeature([Vpoda_reporte]), AuthModule]
})
export class GeneralesModule {}
