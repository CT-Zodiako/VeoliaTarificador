import { Module } from '@nestjs/common';
import { CargueComplementarioService } from './cargue-complementario.service';
import { CargueComplementarioController } from './cargue-complementario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargueComplementario } from './entities/cargue-complementario.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CargueComplementarioController],
  providers: [CargueComplementarioService],
  imports: [TypeOrmModule.forFeature([CargueComplementario]), AuthModule],
})
export class CargueComplementarioModule {}
