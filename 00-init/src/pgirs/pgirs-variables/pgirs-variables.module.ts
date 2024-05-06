import { Module } from '@nestjs/common';
import { PgirsVariablesService } from './pgirs-variables.service';
import { PgirsVariablesController } from './pgirs-variables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vpgirs } from './entities/pgirs-variable.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PgirsVariablesController],
  providers: [PgirsVariablesService],
  imports: [TypeOrmModule.forFeature([Vpgirs]),AuthModule]
})
export class PgirsVariablesModule {}
