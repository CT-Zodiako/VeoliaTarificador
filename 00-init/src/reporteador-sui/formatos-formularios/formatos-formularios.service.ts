import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsultaDTO } from './dto/consulta.dto';
import { SuiF19 } from './entities/f19.entity';
import { SuiF23 } from './entities/f23.entity';
import { SuiF24 } from './entities/f24.entity';
import { SuiF35 } from './entities/f35.entity';
import { SuiF36 } from './entities/f36.entity';


@Injectable()
export class FormatosFormulariosService {
  constructor(
    @InjectRepository(SuiF19)
    private readonly f19Repository: Repository<SuiF19>,
    @InjectRepository(SuiF23)
    private readonly f23Repository: Repository<SuiF23>,
    @InjectRepository(SuiF24)
    private readonly f24Repository: Repository<SuiF24>,
    @InjectRepository(SuiF35)
    private readonly f35Repository: Repository<SuiF35>,
    @InjectRepository(SuiF36)
    private readonly f36Repository: Repository<SuiF36>
  ) {}

  async getF19(consultaDTO: ConsultaDTO) {
    const { ANNO, APSA_ID, MES } = consultaDTO;

    return await this.f19Repository.findBy({
      APSA_ID,
      F19_ANNO: ANNO,
      F19_MES: MES,
    });
  }

  async get23(consultaDTO: ConsultaDTO){
    const { ANNO, APSA_ID, MES } = consultaDTO;
    return await this.f23Repository.findBy({
      APSA_ID,
      F23_ANNO:ANNO,
      F23_MES: MES
    })
  }

  async get24(consultaDTO: ConsultaDTO){
    const { ANNO, APSA_ID, MES } = consultaDTO;
    return await this.f24Repository.findBy({
      APSA_ID,
      F24_ANNO:ANNO,
      F24_MES:MES
    })
  }

  
  async get35(consultaDTO: ConsultaDTO){
    const { ANNO, APSA_ID, MES } = consultaDTO;
    return await this.f35Repository.findBy({
      APSA_ID,
      F35_ANNO:ANNO,
      F35_MES:MES
    })
  }
  async get36(consultaDTO: ConsultaDTO){
    const { ANNO, APSA_ID, MES } = consultaDTO;
    return await this.f36Repository.findBy({
      APSA_ID,
      F36_ANNO:ANNO,
      F36_MES:MES
    })
  }
}
