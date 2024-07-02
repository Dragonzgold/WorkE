import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcpccService } from './tcpcc.service';
import { Tcpcc } from './entities/tcpcc.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('tcpcc')
export class TcpccController {
  constructor(private readonly tcpccService: TcpccService) { }

  @ApiTags('TransferDataTcpcc')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll(@Body() body: Tcpcc) {
    return this.tcpccService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}
