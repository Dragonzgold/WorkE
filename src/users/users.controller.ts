import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('users')
@Auth(Role.ADMIN)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
