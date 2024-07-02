import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VbantraaService } from './vbantraa.service';
import { Vbantraa } from './entities/vbantraa.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('vbantraa')
export class VbantraaController {
  constructor(private readonly vbantraaService: VbantraaService) {}

  @ApiTags('TransferDataVbantraa')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll(@Body() body: Vbantraa) {
    return this.vbantraaService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}
