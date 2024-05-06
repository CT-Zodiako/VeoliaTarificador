import { Module } from '@nestjs/common';
import { ResumenVariablesPgirsService } from './resumen-variables-pgirs.service';
import { ResumenVariablesPgirsController } from './resumen-variables-pgirs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vpgirs } from './entities/resumen-variables-pgir.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ResumenVariablesPgirsController],
  providers: [ResumenVariablesPgirsService],
  imports: [TypeOrmModule.forFeature([Vpgirs]), AuthModule],
})
export class ResumenVariablesPgirsModule {}
