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

  async informePgirsClus(apsid) {
    return await this.pgirsRepository.query(
      `
      SELECT * FROM vgirs_informe WHERE apsid = ${apsid}
      `,
    );
  }

  async informePgirsBarridos(apsid){
    return await this.pgirsRepository.query(`
      SELECT * FROM VGIRS_INFORMELBL WHERE apsid = ${apsid}
    `)
  }
}
