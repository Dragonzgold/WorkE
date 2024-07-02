import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TfachisadatatransferService } from './tfachisadatatransfer.service';
import { tfachisaEntity } from './entity/tfachisa.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { Role } from 'src/common/enum/role.enum';


@ApiTags('TransferDataTfachisa')
@ApiBearerAuth()
@Auth(Role.USER)
@Controller('tfachisadatatransfer')
export class TfachisadatatransferController {
  constructor(private readonly tfachisadatatransferService: TfachisadatatransferService) {}


  @Get()
  findAll(@Body() body: tfachisaEntity) {
    return this.tfachisadatatransferService.findAll(body.select, body.dateStart, body.dateEnd);
  }
}