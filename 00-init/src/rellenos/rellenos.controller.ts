import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RellenosService } from './rellenos.service';
import { CreateRellenoDTO } from '../rellenos/dto/create-relleno.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { UpDataDTO } from './dto/update-relleno.dto';

@Controller('rellenos')
export class RellenosController {
  constructor(private readonly rellenosService: RellenosService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() createRellenoDTO: CreateRellenoDTO, @GetUser() user) {
    return this.rellenosService.create(createRellenoDTO, user.SISU_ID);
  }

  @Get()
  findAll() {
    return this.rellenosService.findAll();
  }

  @Get(':RELL_ID')
  findOne(@Param('RELL_ID') RELL_ID: number) {
    return this.rellenosService.findOne(RELL_ID);
  }

  @Delete(':RELL_ID')
  remove(@Param('RELL_ID') RELL_ID: number) {
    return this.rellenosService.remove(RELL_ID);
  }

  @Patch(':RELL_ID')
  upData(@Param('RELL_ID') RELL_ID: number, @Body() upDataDTO: UpDataDTO) {
    return this.rellenosService.upData(RELL_ID, upDataDTO);
  }
}
