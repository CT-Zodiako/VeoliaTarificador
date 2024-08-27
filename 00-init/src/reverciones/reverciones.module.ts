import { Module } from '@nestjs/common';
import { RevercionesService } from './reverciones.service';
import { RevercionesController } from './reverciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revercione } from './entities/revercione.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RevercionesController],
  providers: [RevercionesService],
  imports:[TypeOrmModule.forFeature([Revercione]), AuthModule]
})
export class RevercionesModule {}
