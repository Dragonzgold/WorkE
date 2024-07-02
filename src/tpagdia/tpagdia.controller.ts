import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TpagdiaService } from './tpagdia.service';
import { Tpagdia } from './entities/tpagdia.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('tpagdia')
export class TpagdiaController {
  constructor(private readonly tpagdiaService: TpagdiaService) {}

  @ApiTags('TransferDataTpagdiaa')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll(@Body() body: Tpagdia) {
    return this.tpagdiaService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}
