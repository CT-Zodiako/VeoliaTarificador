import { Module } from '@nestjs/common';
import { FormatosFormulariosService } from './formatos-formularios.service';
import { FormatosFormulariosController } from './formatos-formularios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { SuiF19 } from './entities/f19.entity';
import { SuiF23 } from './entities/f23.entity';
import { SuiF24 } from './entities/f24.entity';
import { SuiF35 } from './entities/f35.entity';
import { SuiF36 } from './entities/f36.entity';

@Module({
  controllers: [FormatosFormulariosController],
  providers: [FormatosFormulariosService],
  imports: [TypeOrmModule.forFeature([SuiF19,SuiF23,SuiF24,SuiF35,SuiF36]), AuthModule],
})
export class FormatosFormulariosModule {}
