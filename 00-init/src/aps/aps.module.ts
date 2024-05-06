import { Module } from '@nestjs/common';
import { ApsService } from './aps.service';
import { ApsController } from './aps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aps } from './entities/aps.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ApsController],
  providers: [ApsService],
  imports: [TypeOrmModule.forFeature([Aps]), AuthModule],
  exports: [TypeOrmModule],
})
export class ApsModule {}
