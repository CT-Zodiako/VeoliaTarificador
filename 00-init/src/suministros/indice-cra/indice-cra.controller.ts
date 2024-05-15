// import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
// import { IndiceCraService } from './indice-cra.service';
// import { ConsultaDTO } from './dto/consulta.dto';
// import { CreateIndiceCraDTO } from './dto/create-indice-cra.dto';
// import { GetUser } from 'src/auth/decorators/get-user.decorator';
// import { AuthGuard } from '@nestjs/passport';
// import { UpDateIndiceCraDTO } from './dto/update-indice-cra.dto';

// @Controller('indice-cra')
// export class IndiceCraController {
//   constructor(private readonly indiceCraService: IndiceCraService) {}



//   @Get()
//   findOne(@Body() consultaDTO:ConsultaDTO) {
//     console.log(consultaDTO)
//     console.log(`Query: ${JSON.stringify(consultaDTO)}`);
//     return this.indiceCraService.findOne(consultaDTO);
//   }


//   @Post()
//   @UseGuards(AuthGuard())
//   create(@GetUser() user, @Body() createIndiceCraDTO: CreateIndiceCraDTO[]) {
//     return this.indiceCraService.create(user.SISU_ID,createIndiceCraDTO);
//   }

//   @Patch()
//   upDate(@Body() upDateIndiceCraDTO: UpDateIndiceCraDTO[]) {
//     return this.indiceCraService.upDate(upDateIndiceCraDTO);
//   }





// }

import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { IndiceCraService } from './indice-cra.service';
import { ConsultaDTO } from './dto/consulta.dto';

@Controller('indice-cra')
export class IndiceCraController {
  constructor(private readonly indiceCraService: IndiceCraService) {}

  @Get()
  async findOne(@Query() consultaDTO: ConsultaDTO) {
    const { ANNO, MES } = consultaDTO;
    console.log(`Received ANNO: ${ANNO}, MES: ${MES}`);

    if (!ANNO || !MES) {
      throw new BadRequestException('Both ANNO and MES must be provided');
    }

    return await this.indiceCraService.findOne(consultaDTO);
  }
}
