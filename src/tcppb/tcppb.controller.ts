import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcppbService } from './tcppb.service';
import { Tcppb } from './entities/tcppb.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/common/enum/role.enum';
import { Auth } from 'src/auth/decorator/auth.decorator';

@Controller('tcppb')
export class TcppbController {
  constructor(private readonly tcppbService: TcppbService) {}

  @ApiTags('TransferDataTcppb')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll(@Body() body: Tcppb) {
    return this.tcppbService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}
