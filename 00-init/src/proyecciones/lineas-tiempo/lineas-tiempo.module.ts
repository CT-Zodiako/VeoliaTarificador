import { Module } from '@nestjs/common';
import { LineasTiempoService } from './lineas-tiempo.service';
import { LineasTiempoController } from './lineas-tiempo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyProyeccion } from './entities/lineas-tiempo.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [LineasTiempoController],
  providers: [LineasTiempoService],
  imports: [TypeOrmModule.forFeature([ProyProyeccion]), AuthModule],
})
export class LineasTiempoModule {}
