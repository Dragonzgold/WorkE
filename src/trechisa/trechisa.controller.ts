import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrechisaService } from './trechisa.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('trechisa')
export class TrechisaController {
  constructor(private readonly trechisaService: TrechisaService) {}

  @ApiTags('TransferDataTfachisa')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll() {
    return this.trechisaService.findAll();
  }
}
