import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SemestralEntity } from './entities/semestral.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SemestralService {

  constructor(
    @InjectRepository(SemestralEntity)
    private semestralRepository: Repository<SemestralEntity>
  ){}

  async consultaPropias(data) {
    try {
      const {APSA_ID,propia}= data;
      return await this.semestralRepository.query(`
        SELECT es.* FROM AUGE_EMPRESAS es INNER JOIN AUCO_APSEMPRDIVI apsem ON (es.empr_empr = apsem.empr_empr AND apsa_id = :1) WHERE EMPR_PROPIA = :2
        `, [APSA_ID, propia]);
    } catch (error) {
      return `error al consultaPropias: ${error}`
    }
  }

}
