import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dashboard } from './entities/dashboard.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
  imports:[TypeOrmModule.forFeature([Dashboard]),AuthModule]
})
export class DashboardReporteadorModule {}
