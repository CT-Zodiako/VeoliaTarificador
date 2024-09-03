import { Controller, Get, Query} from '@nestjs/common';
import { ValidacionesService } from './validaciones.service';

@Controller('validaciones')
export class ValidacionesController {
  constructor(private readonly validacionesService: ValidacionesService) {}


  @Get('fauco_cpsuivsfact')
  fauco_cpsuivsfact(@Query() data){
    return this.validacionesService.fauco_cpsuivsfact(data);
  }

  
}
