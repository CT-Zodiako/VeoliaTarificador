import { Module } from '@nestjs/common';
import { ProyectarService } from './proyectar.service';
import { ProyectarController } from './proyectar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyProyeccion } from './entities/proyectar.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ProyectarController],
  providers: [ProyectarService],
  imports: [TypeOrmModule.forFeature([ProyProyeccion]), AuthModule],
})
export class ProyectarModule {}
