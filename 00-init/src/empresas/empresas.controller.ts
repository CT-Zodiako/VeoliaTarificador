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
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDTO } from './dto/create-empresa.dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdataEmpresaDTO } from './dto/update-empresa.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@GetUser() user: any, @Body() createEmpresaDTO: CreateEmpresaDTO) {
    const sisuId = user.SISU_ID;
    return this.empresasService.create(createEmpresaDTO,sisuId);
  }


  @Patch()
  upDataEmpre(@Body() updataEmpresaDTO:UpdataEmpresaDTO){
    return this.empresasService.updataEmpresa(updataEmpresaDTO)

  }

  // @UseGuards(AuthGuard())
  @Get('getAllEmpresas')
  findAllEmpresa() {
    return this.empresasService.getAllEmpresas();
  }

  @Get('empreEmpre')
  findOneEmpreEmpre(@Body() Body) {
    
    return this.empresasService.findOneEmpreEmpre(Body.EMPRE_EMPRE);
  }

  @Delete()
  deleteEmpresa(@Body() Body) {
    return this.empresasService.deleteEmpresa(Body.EMPRE_EMPRE);
  }

  @Get('getPropias')
  getPropias(@Body() Body){
    return this.empresasService.getEmpresasByApsaIdAndPropia(Body.APSA_ID,Body.EMPR_PROPIA)
  }

  @Get('byAps')
  getByAps(@Body() Body){
    return this.empresasService.getByAps(Body.APSA_ID)
  }

}
