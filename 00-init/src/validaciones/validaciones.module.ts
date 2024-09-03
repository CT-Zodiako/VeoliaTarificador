import { Module } from '@nestjs/common';
import { ValidacionesService } from './validaciones.service';
import { ValidacionesController } from './validaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Validaciones } from './entities/validacione.entity';

@Module({
  controllers: [ValidacionesController],
  providers: [ValidacionesService],
  imports: [TypeOrmModule.forFeature([Validaciones])],
})
export class ValidacionesModule {}
