import { Module } from '@nestjs/common';
import { AjusteProductividadService } from './ajuste-productividad.service';
import { AjusteProductividadController } from './ajuste-productividad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ProductividadEntity } from './entities/ajuste-productividad.entity';

@Module({
  controllers: [AjusteProductividadController],
  providers: [AjusteProductividadService],
  imports: [TypeOrmModule.forFeature([ProductividadEntity]),AuthModule],
})
export class AjusteProductividadModule {}
