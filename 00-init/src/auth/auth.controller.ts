import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Param,
  Put,
  Patch,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO, LoginUserDTO } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { RawHeaders } from './decorators/raw-headers.decorator';
import { UpdateUserDTO } from './dto/update-user.dto';
import { RandomPassUserDTO } from './dto/random-pass-user-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('getSistemasUser')
  getSistemasUser(@Query() data) {
    return this.authService.getSistemasUser(data);
  }

  @Post('register')
  @UseGuards(AuthGuard())
  createUser(@Body() createUserDTO: CreateUserDTO) {
    return this.authService.create(createUserDTO);
  }

  @Post('login')
  loginUser(@Body() loginUserDTO: LoginUserDTO) {
    return this.authService.login(loginUserDTO);
  }

  @Patch('changePassword')
  @UseGuards(AuthGuard())
  changePassword(@Body() changePassUserDTO: any, @GetUser() user: any) {
    const sisuId = user?.SISU_ID;
    return this.authService.changePassword(changePassUserDTO, sisuId);
  }

  @Patch('randomPassword')
  // @UseGuards(AuthGuard())
  randomPassword(@Body() randomPassUserDTO: RandomPassUserDTO) {
    return this.authService.randomPassword(randomPassUserDTO);
  }

  @Post('logout')
  @UseGuards(AuthGuard())
  logout(@GetUser() user: any, @RawHeaders() rawHeaders: any) {
    const sisuId = user?.SISU_ID;
    const token = rawHeaders[5];
    return this.authService.logout(token, sisuId);
  }

  @Put('updateUser')
  @UseGuards(AuthGuard())
  updateUser(@Body() userUpdata: UpdateUserDTO) {
    return this.authService.updateUser(userUpdata);
  }

  @Get('users')
  @UseGuards(AuthGuard())
  getUsers() {
    return this.authService.getUsers();
  }

  @Get('user/:id')
  @UseGuards(AuthGuard())
  getUser(@Param('id') id: number) {
    return this.authService.getUser(id);
  }

  @Get('menu')
  @UseGuards(AuthGuard())
  getMenuUser(@Query() data,@GetUser() user: any) {
    const sisuId = user?.SISU_ID;
    const { idSistema } = data;
    return this.authService.getMenuUser(sisuId, idSistema);
  }

  @Get('getApsAsignados')
  @UseGuards(AuthGuard())
  getApsAsignados(@GetUser() user: any) {
    const sisuId = user?.SISU_ID;
    return this.authService.getApsAsignados(sisuId);
  }

  @Get('getMenuUserOptions')
  @UseGuards(AuthGuard())
  getMenuUserOptions(@GetUser() user: any,) {
    const sisuId = user?.SISU_ID;
    return this.authService.getMenuUserOptions(sisuId);
  }
  
  @Get('getMenuByUser')
  @UseGuards(AuthGuard())
  getMenuByUser(@Query() data) {
    const { sisuId } = data;
    return this.authService.getMenuByUser(sisuId);
  }

  @Get('getMenuPadreHijos')
  // @UseGuards(AuthGuard())
  getMenuPadreHijos() {
    return this.authService.getMenuPadreHijos();
  }

  @Post('asignarSistema')
  @UseGuards(AuthGuard())
  asignarSistema(@Body() data: any){
    return this.authService.asignarSistema(data.sisuId, data.asignados, data.noAsignados);
  }

  @Post('setApsUser')
  @UseGuards(AuthGuard())
  setApsUser(@Body() body: any){
    return this.authService.setApsUser(body.sisuId, body.fueraAps, body.dentroAps);
  }

  @Post('asignarMenu')
  @UseGuards(AuthGuard())
  AsignarMenu(@Body() body){
    return this.authService.AsignarMenu(body);
  }

  @Post('asignarAps')
  @UseGuards(AuthGuard())
  AsignarAps(@Body() body){
    return this.authService.AsignarAps(body);
  }

  @Get('getSistemas')
  getSistemas(@Query() data) {
    return this.authService.getSistemas(data);
  }



  @Get('private')
  @UseGuards(AuthGuard())
  privateRoute(@GetUser() user: any) {
    const sisuId = user?.SISU_ID;

    console.log(sisuId);

    return {
      user,
    };
  }
}
