import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrecdiaService } from './trecdia.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('trecdia')
export class TrecdiaController {
  constructor(private readonly trecdiaService: TrecdiaService) {}

  @ApiTags('TransferDataTrecdia')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll() {
    return this.trecdiaService.findAll();
  }
}
