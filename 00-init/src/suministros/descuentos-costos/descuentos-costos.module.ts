import { Module } from '@nestjs/common';
import { DescuentosCostosService } from './descuentos-costos.service';
import { DescuentosCostosController } from './descuentos-costos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DescuentoCostosEntity } from './entities/descuentos-costo.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DescuentosCostosController],
  providers: [DescuentosCostosService],
  imports: [TypeOrmModule.forFeature([DescuentoCostosEntity]),AuthModule],
})
export class DescuentosCostosModule {}
