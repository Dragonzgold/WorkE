import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { RolesGuard } from './guard/roles.guard';
import { Roles } from './decorator/roles.decorator';
import { Role } from 'src/common/enum/role.enum';

interface RequestWithUser extends Request {
  user: { nameUser: string; role: string };
}

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

  @Get("profile")
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER)
  profile(@Request() req: RequestWithUser){
    return req.user;
  }

  @Get("profile2")
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  profile2(@Request() req: RequestWithUser){
    return req.user
  }

}
