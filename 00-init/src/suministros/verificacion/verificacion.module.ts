import { Module } from '@nestjs/common';
import { VerificacionService } from './verificacion.service';
import { VerificacionController } from './verificacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { entityVerificacion } from './entities/verificacion.entity';

@Module({
  controllers: [VerificacionController],
  providers: [VerificacionService],
  imports:[TypeOrmModule.forFeature([entityVerificacion]),AuthModule]
})
export class VerificacionModule {}
