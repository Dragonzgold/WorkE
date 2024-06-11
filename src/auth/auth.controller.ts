import { Controller, Get, Post, Body, UseGuards, Request, Patch, Param, Query, ParseIntPipe, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { RolesGuard } from './guard/roles.guard';
import { Roles } from './decorator/roles.decorator';
import { Role } from '../common/enum/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { ActiveUserInterface } from 'src/common/interfaces/active.user.interface';

interface RequestWithUser extends Request {
  user: { nameUser: string; role: string };
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body() registerDto: RegisterDto){
    return this.authService.register(registerDto)
  }

  @Post("login")
  login(@Body() loginDto: LoginDto){
    return this.authService.login(loginDto)
  }

  @ApiBearerAuth()
  @Get("profile")
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER)
  profile(@Request() req: RequestWithUser){
    return req.user;
  }

  @ApiBearerAuth()
  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  getAll(){
    return this.authService.getAll()
  }

  @ApiBearerAuth()
  @Patch(':nameUser')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  update(@Param('nameUser') nameUser: string, @Body()updateUserDto: UpdateUserDto){
    return this.authService.update(nameUser, updateUserDto)
  }

  @ApiBearerAuth()
  @Delete(':nameUser')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  delete(@Param('nameUser') nameUser: string){
    return this.authService.delete(nameUser)
  }
}
