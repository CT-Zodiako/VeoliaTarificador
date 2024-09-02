import { Module } from '@nestjs/common';
import { SubsidiosContribucionesService } from './subsidios-contribuciones.service';
import { SubsidiosContribucionesController } from './subsidios-contribuciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyProyeccion } from './entities/subsidios-contribucione.entity';

@Module({
  controllers: [SubsidiosContribucionesController],
  providers: [SubsidiosContribucionesService],
  imports: [TypeOrmModule.forFeature([ProyProyeccion])]
})
export class SubsidiosContribucionesProyeccionesModule {}
