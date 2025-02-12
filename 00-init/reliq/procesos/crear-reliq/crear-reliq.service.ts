import { Injectable } from '@nestjs/common';
import { CreateReliquidaDto } from './dto/create-crear-reliq.dto';
import { UpdateCrearReliqDto } from './dto/update-crear-reliq.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reliquida } from './entities/crear-reliq.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CrearReliqService {

  constructor(
    @InjectRepository(Reliquida)
    private readonly reliquidaRepository: Repository<Reliquida>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createReliquidaDto: CreateReliquidaDto): Promise<Reliquida> {
    try {
      const result = await this.dataSource.query(`SELECT RELIQ.SRELQRELIQUIDA.NEXTVAL FROM DUAL`);
      const reliquida = this.reliquidaRepository.create({
        relqid: result[0]['NEXTVAL'], ...createReliquidaDto
      });
      return await this.reliquidaRepository.save(reliquida);
      
    } catch (error) {
      console.log(`Error CrearReliqService.create: ${error}`);
    }
}

  async getReliquidaciones() {
    try {
      return await this.reliquidaRepository.find();
    } catch (error) {
      console.log(`Error CrearReliqService.findAll: ${error}`);
    }
  }

  async getReliquidacionByAps(apsId){
    try {
      return await this.reliquidaRepository.find({
        where: {
          apsaid: apsId
        }
      });
    } catch (error) {
      console.log(`Error CrearReliqService.getReliquidacionByAps: ${error}`);
    }
  }


  update(id: number, updateCrearReliqDto: UpdateCrearReliqDto) {
    return `This action updates a #${id} crearReliq`;
  }

  remove(id: number) {
    return `This action removes a #${id} crearReliq`;
  }
}
