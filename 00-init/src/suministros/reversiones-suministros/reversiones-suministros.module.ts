import { Module } from '@nestjs/common';
import { ReversionesSuministrosService } from './reversiones-suministros.service';
import { ReversionesSuministrosController } from './reversiones-suministros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { IndiceCra } from './entities/reversiones-suministro.entity';

@Module({
  controllers: [ReversionesSuministrosController],
  providers: [ReversionesSuministrosService],
  imports:[TypeOrmModule.forFeature([IndiceCra]),AuthModule]
})
export class ReversionesSuministrosModule {}
