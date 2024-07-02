import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TpagdiabService } from './tpagdiab.service';
import { Tpagdiab } from './entities/tpagdiab.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('tpagdiab')
export class TpagdiabController {
  constructor(private readonly tpagdiabService: TpagdiabService) {}

  @ApiTags('TransferDataTpagdiab')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll(@Body() body:Tpagdiab) {
    return this.tpagdiabService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}
