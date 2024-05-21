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
import { ApsService } from './aps.service';
import { CreateApsDTO } from './dto/create-aps.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('aps')
export class ApsController {
  constructor(private readonly apsService: ApsService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() createApsDTO: CreateApsDTO, @GetUser() user: any) {
    const sisuId = user.SISU_ID;
    return this.apsService.createAps(createApsDTO, sisuId);
  }

  @Patch('updataAps')
  @UseGuards(AuthGuard())
  updataAps(@Body() updataApsDTO) {
    console.log(updataApsDTO)
    return this.apsService.updataAps(updataApsDTO);
  }

  @Get('findOneAps/:id')
  findOneAps(@Param('id') id: number) {
    return this.apsService.findOneAps(+id);
  }

  @Get('findApsByEstado')
  findApsByEstado() {
    return this.apsService.findApsByEstado()
  }


  @Get('allAps')
  @UseGuards(AuthGuard())
  findAllAps() {
    return this.apsService.findAllAps();
  }

  @Get('apsByUser')
  @UseGuards(AuthGuard())
  apsByUser(@GetUser() user: any) {
    const sisuId = user.SISU_ID;
    return this.apsService.findApsByUser(sisuId);
  }

  @Delete('deleteAps/:id')
  @UseGuards(AuthGuard())
  deleteAps(@Param('id') id: number){
    return this.apsService.deleteAps(id)
  }
}
