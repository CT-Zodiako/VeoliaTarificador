import { Module } from '@nestjs/common';
import { MensualService } from './mensual.service';
import { MensualController } from './mensual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SemestralEntity } from './entities/mensual.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [MensualController],
  providers: [MensualService],
  imports: [TypeOrmModule.forFeature([SemestralEntity]), AuthModule],
})
export class MensualModule {}
