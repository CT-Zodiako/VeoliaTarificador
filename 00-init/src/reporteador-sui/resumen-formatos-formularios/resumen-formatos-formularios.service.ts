import { Injectable } from '@nestjs/common';
import { ConsultaDTO } from './dto/consulta.dto';
import { SuiF19 } from './entities/f19.entity';
import { SuiF23 } from './entities/f23.entity';
import { SuiF24 } from './entities/f24.entity';
import { SuiF35 } from './entities/f35.entity';
import { SuiF36 } from './entities/f36.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ResumenFormatosFormulariosService {
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
    private readonly f36Repository: Repository<SuiF36>,
  ) {}
  async getF19(consultaDTO: ConsultaDTO) {
    const { APSA_ID } = consultaDTO;

    return await this.f19Repository.findBy({
      APSA_ID,
    });
  }

  async get23(consultaDTO: ConsultaDTO) {
    const { APSA_ID } = consultaDTO;
    return await this.f23Repository.findBy({
      APSA_ID,
    });
  }

  async get24(consultaDTO: ConsultaDTO) {
    const { APSA_ID } = consultaDTO;
    return await this.f24Repository.findBy({
      APSA_ID,
    });
  }

  async get35(consultaDTO: ConsultaDTO) {
    const { APSA_ID } = consultaDTO;
    return await this.f35Repository.findBy({
      APSA_ID,
    });
  }
  async get36(consultaDTO: ConsultaDTO) {
    const { APSA_ID } = consultaDTO;
    return await this.f36Repository.findBy({
      APSA_ID,
    });
  }
}
