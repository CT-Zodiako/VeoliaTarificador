import { Module } from '@nestjs/common';
import { DetalladoCostoService } from './detallado-costo.service';
import { DetalladoCostoController } from './detallado-costo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AucoApsaseo } from './entities/detallado-costo.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DetalladoCostoController],
  providers: [DetalladoCostoService],
  imports: [TypeOrmModule.forFeature([AucoApsaseo]), AuthModule]
})
export class DetalladoCostoModule {}
