import { Module } from '@nestjs/common';
import { ReversionesService } from './reversiones.service';
import { ReversionesController } from './reversiones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuiRevf19 } from './entities/suiRevf19.entity';
import { AuthModule } from 'src/auth/auth.module';
import { SuiRevf23 } from './entities/suiRevf23.entity';
import { SuiRevf24 } from './entities/suiRevF24.entity';
import { SuiRevf35 } from './entities/suiRevF35.entity';
import { SuiRevf36 } from './entities/suiRevF36.entity';

@Module({
  controllers: [ReversionesController],
  providers: [ReversionesService],
  imports:[TypeOrmModule.forFeature([SuiRevf19,SuiRevf23,SuiRevf24,SuiRevf35,SuiRevf36]),AuthModule]
})
export class ReversionesModule {}
