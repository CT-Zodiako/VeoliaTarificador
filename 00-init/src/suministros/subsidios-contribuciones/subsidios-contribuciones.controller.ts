import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { SubsidiosContribucionesService } from './subsidios-contribuciones.service';
import { CreateSubsidiosContribucioneDto } from './dto/create-subsidios-contribucione.dto';
import { UpdateSubsidiosContribucioneDTO } from './dto/update-subsidios-contribucione.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('subsidios-contribuciones')
export class SubsidiosContribucionesController {
  constructor(
    private readonly subsidiosContribucionesService: SubsidiosContribucionesService,
  ) {}

  @Post()
  @UseGuards(AuthGuard())
  create(
    @GetUser() user,
    @Body() createSubsidiosContribucioneDto: CreateSubsidiosContribucioneDto,
  ) {
    console.log(user.SISU_ID);
    return this.subsidiosContribucionesService.create(
      createSubsidiosContribucioneDto,
      user.SISU_ID,
    );
  }

  @Get()
  async findOne(@Query() body) {
    const { APSA_ID, SUCO_ANNO, SUCO_MES } = body;
    return await this.subsidiosContribucionesService.findOne(
      APSA_ID, SUCO_ANNO, SUCO_MES
    );
  }

  @Patch()
  update(
    @Body() updateSubsidiosContribucioneDto,
  ) {
    return this.subsidiosContribucionesService.update(
      updateSubsidiosContribucioneDto
    );
  }
}
