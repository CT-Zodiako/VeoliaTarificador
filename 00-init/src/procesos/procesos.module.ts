import { Module } from '@nestjs/common';
import { ProcesosService } from './procesos.service';
import { ProcesosController } from './procesos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proceso } from './entities/proceso.entity';

@Module({
  controllers: [ProcesosController],
  providers: [ProcesosService],
  imports: [TypeOrmModule.forFeature([Proceso])],
})
export class ProcesosModule {}
