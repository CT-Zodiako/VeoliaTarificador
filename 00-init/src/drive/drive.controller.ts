import { Controller, Get, Query } from '@nestjs/common';
import { DriveService } from './drive.service';

@Controller('drive')
export class DriveController {
  constructor(private readonly driveService: DriveService) {}

  @Get('consultar')
  async consultarArchivo(
    @Query('idFile') idFile: string,
    @Query('sheet') sheet: string,
  ) {
    return this.driveService.consultarArchivo(idFile, sheet);
  }
}
