import { Controller, Get, Query } from '@nestjs/common';
import { SemestralService } from './semestral.service';

@Controller('semestral')
export class SemestralController {
  constructor(private readonly semestralService: SemestralService) {}

  @Get('consultaPropias')
  consultaPropias(@Query() data) {
    return this.semestralService.consultaPropias(data);
  }

  


}
