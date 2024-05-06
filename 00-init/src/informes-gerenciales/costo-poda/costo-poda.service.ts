import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vpoda_reporte } from './entities/costo-poda.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CostoPodaService {
  constructor(
    @InjectRepository(Vpoda_reporte)
    private readonly vpodaReporteRepository: Repository<Vpoda_reporte>,
  ) {}

  async findByAps(APS_ID: number) {
    return await this.vpodaReporteRepository.query(
      `
      SELECT * FROM vpoda_reporte WHERE apsa_id = ${APS_ID} ORDER BY periodo DESC
      `,
    );
  }
}
