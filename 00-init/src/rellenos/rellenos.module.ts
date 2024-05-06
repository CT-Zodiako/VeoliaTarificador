import { Module } from '@nestjs/common';
import { RellenosService } from './rellenos.service';
import { RellenosController } from './rellenos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AucoRellenos } from './entities/relleno.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RellenosController],
  providers: [RellenosService],
  imports: [TypeOrmModule.forFeature([AucoRellenos]), AuthModule],
})
export class RellenosModule {}
