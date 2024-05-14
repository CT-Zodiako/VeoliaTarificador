import { Module } from '@nestjs/common';
import { IndiceCraService } from './indice-cra.service';
import { IndiceCraController } from './indice-cra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndiceCra } from './entities/indice-cra.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [IndiceCraController],
  providers: [IndiceCraService],
  imports:[TypeOrmModule.forFeature([IndiceCra]),AuthModule]
})
export class IndiceCraModule {}
