import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcppcService } from './tcppc.service';
import { Tcpcc } from 'src/tcpcc/entities/tcpcc.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('tcppc')
export class TcppcController {
  constructor(private readonly tcppcService: TcppcService) {}

  @ApiTags('TransferDataTcppc')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll(@Body() body: Tcpcc) {
    return this.tcppcService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}
