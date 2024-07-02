import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcpcbService } from './tcpcb.service';
import { Tcpcb } from './entities/tcpcb.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@ApiTags('TransferDataTcpcb')
@ApiBearerAuth()
@Auth(Role.USER)
@Controller('tcpcb')
export class TcpcbController {
  constructor(private readonly tcpcbService: TcpcbService) { }

  @Get()
  findAll(@Body() body: Tcpcb) {
    return this.tcpcbService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}
