import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrecdibService } from './trecdib.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('trecdib')
export class TrecdibController {
  constructor(private readonly trecdibService: TrecdibService) {}

  @ApiTags('TransferDataTrecdib')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll() {
    return this.trecdibService.findAll();
  }
}
