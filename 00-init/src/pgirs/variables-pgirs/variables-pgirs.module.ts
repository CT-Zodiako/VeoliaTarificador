import { Module } from '@nestjs/common';
import { VariablesPgirsService } from './variables-pgirs.service';
import { VariablesPgirsController } from './variables-pgirs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vpgirs } from './entities/variables-pgir.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [VariablesPgirsController],
  providers: [VariablesPgirsService],
  imports: [TypeOrmModule.forFeature([Vpgirs]), AuthModule]
})
export class VariablesPgirsModule {}
