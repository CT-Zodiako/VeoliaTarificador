import { Module } from '@nestjs/common';
import { CrearReliqService } from './crear-reliq.service';
import { CrearReliqController } from './crear-reliq.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reliquida } from './entities/crear-reliq.entity';
import { ApsModule } from 'src/aps/aps.module';

@Module({
  controllers: [CrearReliqController],
  imports: [TypeOrmModule.forFeature([Reliquida]), ApsModule],
  providers: [CrearReliqService],
})
export class CrearReliqModule {}
