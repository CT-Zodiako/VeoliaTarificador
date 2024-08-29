import { Injectable } from '@nestjs/common';
import { CreateValidacioneDto } from './dto/create-validacione.dto';
import { UpdateValidacioneDto } from './dto/update-validacione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Validaciones} from './entities/validacione.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ValidacionesService {
  
  constructor(
    @InjectRepository(Validaciones)
    private readonly validacionesRepository: Repository<Validaciones>,
    private readonly dataSource: DataSource
    

  ) {


  }

  findAll() {
    return `This action returns all validaciones`;
  }


  async fauco_cpsuivsfact(data): Promise<any> {
    const {APSA_ID, ANNO,MES} = data;

    const queryRunner = this.dataSource.createQueryRunner(); 
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();
      
      const result = await queryRunner.query(`
        DECLARE
          res STRING;
        BEGIN
          res := PK_VALGRAL.fauco_cpsuivsfact(:1, :2, :3);
          COMMIT;
        END;
      `, [APSA_ID, ANNO, MES]);


      await queryRunner.commitTransaction();

      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
  }
  
