import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TfachisabdatatransferService } from './tfachisabdatatransfer.service';
import { Tfachisabdatatransfer } from './entities/tfachisabdatatransfer.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/common/enum/role.enum';
import { Auth } from 'src/auth/decorator/auth.decorator';

@ApiTags('TransferDataTfachisb')
@ApiBearerAuth()
@Auth(Role.USER)
@Controller('tfachisabdatatransfer')
export class TfachisabdatatransferController {
  constructor(private readonly tfachisabdatatransferService: TfachisabdatatransferService) {}

  @Get()
  findAll(@Body() body: Tfachisabdatatransfer ) {
    return this.tfachisabdatatransferService.findAll(body.select, body.dateStart, body.dateEnd);
  }

}
