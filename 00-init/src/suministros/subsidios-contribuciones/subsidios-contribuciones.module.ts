import { Module } from '@nestjs/common';
import { SubsidiosContribucionesService } from './subsidios-contribuciones.service';
import { SubsidiosContribucionesController } from './subsidios-contribuciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AucoApssubscont} from './entities/subsidios-contribucione.entity'

@Module({
  controllers: [SubsidiosContribucionesController],
  providers: [SubsidiosContribucionesService],
  imports: [TypeOrmModule.forFeature([AucoApssubscont]), AuthModule],
})
export class SubsidiosContribucionesModule {}
