import { Module } from '@nestjs/common';
import { CrecimientoVaraiblesService } from './crecimiento-varaibles.service';
import { CrecimientoVaraiblesController } from './crecimiento-varaibles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ProyProyeccion } from './entities/crecimiento-varaible.entity';

@Module({
  controllers: [CrecimientoVaraiblesController],
  providers: [CrecimientoVaraiblesService],
  imports: [TypeOrmModule.forFeature([ProyProyeccion]), AuthModule],
})
export class CrecimientoVaraiblesModule {}
