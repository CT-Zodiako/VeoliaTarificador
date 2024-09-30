import { Module } from '@nestjs/common';
import { SemestralService } from './semestral.service';
import { SemestralController } from './semestral.controller';
import { SemestralEntity } from './entities/semestral.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SemestralController],
  providers: [SemestralService],
  imports: [TypeOrmModule.forFeature([SemestralEntity]), AuthModule],
})
export class SemestralModule {}
