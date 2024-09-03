import { Module } from '@nestjs/common';
import { CrearService } from './crear.service';
import { CrearController } from './crear.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyProyeccion } from './entities/crear.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CrearController],
  providers: [CrearService],
  imports : [TypeOrmModule.forFeature([ProyProyeccion]), AuthModule]
})
export class CrearModule {}
