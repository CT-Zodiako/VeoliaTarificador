import { Module } from '@nestjs/common';
import { RevercionesInformesComercialesService } from './reverciones-informes-comerciales.service';
import { RevercionesInformesComercialesController } from './reverciones-informes-comerciales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevercionesInformesComerciale } from './entities/reverciones-informes-comerciale.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RevercionesInformesComercialesController],
  providers: [RevercionesInformesComercialesService],
  imports: [
    TypeOrmModule.forFeature([RevercionesInformesComerciale]),
    AuthModule,
  ],
})
export class RevercionesInformesComercialesModule {}
