import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VbantrabService } from './vbantrab.service';
import { Vbantrab } from './entities/vbantrab.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('vbantrab')
export class VbantrabController {
  constructor(private readonly vbantrabService: VbantrabService) {}

  @ApiTags('TransferDataVbantraa')
  @ApiBearerAuth()
  @Auth(Role.USER)
  @Get()
  findAll(@Body() body: Vbantrab) {
    return this.vbantrabService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}
