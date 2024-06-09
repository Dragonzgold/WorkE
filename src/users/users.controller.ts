import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Auth } from '../auth/decorator/auth.decorator';
import { Role } from '../common/enum/role.enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Users")
@Controller('users')
@Auth(Role.ADMIN)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
