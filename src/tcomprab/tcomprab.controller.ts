import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcomprabService } from './tcomprab.service';
import { Tcomprab } from './entities/tcomprab.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('tcomprab')
export class TcomprabController {
  constructor(private readonly tcomprabService: TcomprabService) {}

  @ApiTags('TransferDataTcompra')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll(@Body() body: Tcomprab) {
    return this.tcomprabService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}
