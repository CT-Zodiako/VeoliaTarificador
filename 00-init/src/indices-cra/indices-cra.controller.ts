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
import { IndicesCraService } from './indices-cra.service';
import { CreateIndicesCraDto } from './dto/create-indices-cra.dto';
import { UpdateIndicesCraDTO } from './dto/update-indices-cra.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('indices-cra')
export class IndicesCraController {
  constructor(private readonly indicesCraService: IndicesCraService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@GetUser() user, @Body() createIndicesCraDto: CreateIndicesCraDto) {
    return this.indicesCraService.create(createIndicesCraDto, user.SISU_ID);
  }

  @Get('findAll')
  findAll() {
    return this.indicesCraService.findAll();
  }

  @Get()
  findOne(@Body() body) {
    return this.indicesCraService.findOne(body.INDI_ANNO, body.INDI_MES);
  }

  @Patch()
  update(@Body() updateIndicesCraDTO: UpdateIndicesCraDTO ) {
    return this.indicesCraService.update(updateIndicesCraDTO);
  }

  @Delete()
  remove(@Body() body) {
    return this.indicesCraService.remove(
      body.PARA_INDICE,
      body.INDI_ANNO,
      body.INDI_MES,
    );
  }
}
