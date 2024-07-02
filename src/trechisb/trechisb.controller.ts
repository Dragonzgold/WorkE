import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrechisbService } from './trechisb.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('trechisb')
export class TrechisbController {
  constructor(private readonly trechisbService: TrechisbService) { }

  @ApiTags('TransferDataTrechisb')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll() {
    return this.trechisbService.findAll();
  }
}
