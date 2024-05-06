import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SuiRevf19 } from './entities/suiRevf19.entity';
import { Repository } from 'typeorm';
import { ConsultaDTO } from './dto/consulta.dto';
import { SuiRevf23 } from './entities/suiRevf23.entity';
import { SuiRevf24 } from './entities/suiRevF24.entity';
import { SuiRevf35 } from './entities/suiRevF35.entity';
import { SuiRevf36 } from './entities/suiRevF36.entity';

@Injectable()
export class ReversionesService {
  constructor(
    @InjectRepository(SuiRevf19)
    private readonly suiRevf19Repository: Repository<SuiRevf19>,
    @InjectRepository(SuiRevf23)
    private readonly suiRevf23Repository: Repository<SuiRevf23>,
    @InjectRepository(SuiRevf24)
    private readonly suiRevf24Repository: Repository<SuiRevf24>,
    @InjectRepository(SuiRevf35)
    private readonly suiRevf35Repository: Repository<SuiRevf35>,
    @InjectRepository(SuiRevf36)
    private readonly suiRevf36Repository: Repository<SuiRevf36>,
  ) {}

  async getSuiRevf19(consultaDTO:ConsultaDTO) {
    const{APSA_ID}=consultaDTO
    return await this.suiRevf19Repository.findBy({
      APSA_ID
    })
  }

  async getSuiRevf23(consultaDTO:ConsultaDTO){
    const{APSA_ID}=consultaDTO
    return await this.suiRevf23Repository.findBy({
      APSA_ID
    })
  }

  async getSuiRevf24(consultaDTO:ConsultaDTO){
    const{APSA_ID}=consultaDTO
    return await this.suiRevf24Repository.findBy({
      APSA_ID
    })
  }

  async getSuiRevf35(consultaDTO:ConsultaDTO){
    const{APSA_ID}=consultaDTO
    return await this.suiRevf35Repository.findBy({
      APSA_ID
    })
  }
  async getSuiRevf36(consultaDTO:ConsultaDTO){
    const{APSA_ID}=consultaDTO
    return await this.suiRevf36Repository.findBy({
      APSA_ID
    })
  }
}
