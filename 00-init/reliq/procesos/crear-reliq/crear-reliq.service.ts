import { Injectable } from '@nestjs/common';
import { CreateReliquidaDto } from './dto/create-crear-reliq.dto';
import { UpdateCrearReliqDto } from './dto/update-crear-reliq.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reliquida } from './entities/crear-reliq.entity';
import { Repository } from 'typeorm';
import { ApsService } from '../../../src/aps/aps.service';

@Injectable()
export class CrearReliqService {

  constructor(
    @InjectRepository(Reliquida)
    private readonly reliquidaRepository: Repository<Reliquida>,
  ) {}

  async create(createReliquidaDto: CreateReliquidaDto): Promise<Reliquida> {
    try {
      const reliquida = this.reliquidaRepository.create(createReliquidaDto);
        console.log(createReliquidaDto);
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

  findOne(id: number) {
    return `This action returns a #${id} crearReliq`;
  }

  update(id: number, updateCrearReliqDto: UpdateCrearReliqDto) {
    return `This action updates a #${id} crearReliq`;
  }

  remove(id: number) {
    return `This action removes a #${id} crearReliq`;
  }
}
