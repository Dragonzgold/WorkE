import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcompraService } from './tcompra.service';
import { Tcompra } from './entities/tcompra.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('tcompra')
export class TcompraController {
  constructor(private readonly tcompraService: TcompraService) { }

  @ApiTags('TransferDataTcompra')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll(@Body() body: Tcompra) {
    return this.tcompraService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}
