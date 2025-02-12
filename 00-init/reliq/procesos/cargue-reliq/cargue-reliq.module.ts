import { Module } from '@nestjs/common';
import { CargueReliqService } from './cargue-reliq.service';
import { CargueReliqController } from './cargue-reliq.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReliInfoEmprDivi } from './entities/cargue-reliq.entity';
import { ReliInfoApsRelleno } from './entities/reliInfo-aps-relleno.entity';
import { ReliInfoApsEmprDivi } from './entities/reliInfo-apsempr-divi.entity';
import { ReliInfoAdicional } from './entities/reliInfo-adicional.entity';
import { ReliInfUsuApSemprDivi } from './entities/reliInf-usu-aps-empr-divi.entity';

@Module({
  controllers: [CargueReliqController],
  imports: [TypeOrmModule.forFeature([ReliInfoEmprDivi, ReliInfoApsRelleno,ReliInfoApsEmprDivi,ReliInfoAdicional,ReliInfUsuApSemprDivi])],
  providers: [CargueReliqService],
})
export class CargueReliqModule {}
