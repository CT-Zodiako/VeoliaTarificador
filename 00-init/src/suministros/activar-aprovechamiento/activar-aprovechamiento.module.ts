import { Module } from '@nestjs/common';
import { ActivarAprovechamientoService } from './activar-aprovechamiento.service';
import { ActivarAprovechamientoController } from './activar-aprovechamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { aprovechamientoEntity } from './entities/activar-aprovechamiento.entity';

@Module({
  controllers: [ActivarAprovechamientoController],
  providers: [ActivarAprovechamientoService],
  imports: [TypeOrmModule.forFeature([aprovechamientoEntity]),AuthModule],
})
export class ActivarAprovechamientoModule {}
