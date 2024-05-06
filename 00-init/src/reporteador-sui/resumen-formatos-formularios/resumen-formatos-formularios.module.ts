import { Module } from '@nestjs/common';
import { ResumenFormatosFormulariosService } from './resumen-formatos-formularios.service';
import { ResumenFormatosFormulariosController } from './resumen-formatos-formularios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuiF19 } from './entities/f19.entity';
import { SuiF23 } from './entities/f23.entity';
import { SuiF24 } from './entities/f24.entity';
import { SuiF35 } from './entities/f35.entity';
import { SuiF36 } from './entities/f36.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ResumenFormatosFormulariosController],
  providers: [ResumenFormatosFormulariosService],
  imports: [
    TypeOrmModule.forFeature([SuiF19, SuiF23, SuiF24, SuiF35, SuiF36]),
    AuthModule,
  ],
})
export class ResumenFormatosFormulariosModule {}
