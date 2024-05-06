import { Module } from '@nestjs/common';
import { IndicesCraService } from './indices-cra.service';
import { IndicesCraController } from './indices-cra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AucoIndicescra } from './entities/indices-cra.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [IndicesCraController],
  providers: [IndicesCraService],
  imports: [TypeOrmModule.forFeature([AucoIndicescra]), AuthModule]
})
export class IndicesCraModule {}
