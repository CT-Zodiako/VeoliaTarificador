import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AugeEmpresas } from './entities/empresa.entity';

@Module({
  controllers: [EmpresasController],
  providers: [EmpresasService],
  imports: [TypeOrmModule.forFeature([AugeEmpresas]), AuthModule],
  exports: [TypeOrmModule],
})
export class EmpresasModule {}
