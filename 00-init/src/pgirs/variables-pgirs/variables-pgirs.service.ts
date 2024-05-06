import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vpgirs } from './entities/variables-pgir.entity';
import { Repository } from 'typeorm';
import { ConsultaDTO } from './dto/consulta.dto';

@Injectable()
export class VariablesPgirsService {
  constructor(
    @InjectRepository(Vpgirs)
    private readonly pgirsRepository: Repository<Vpgirs>,
  ) {}

  async informePgirsClus(consultaDTO: ConsultaDTO) {
    const { APSA_ID } = consultaDTO;
    return await this.pgirsRepository.query(
      `
      SELECT * FROM vgirs_informe WHERE apsid = ${APSA_ID}
      `,
    );
  }

  async informePgirsBarridos(consultaDTO: ConsultaDTO){
    const {APSA_ID}= consultaDTO;
    return await this.pgirsRepository.query(`
      SELECT * FROM VGIRS_INFORMELBL WHERE apsid = ${APSA_ID}
    `)
  }
}
