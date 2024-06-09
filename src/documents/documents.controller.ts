import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Auth } from '../auth/decorator/auth.decorator';
import { Role } from '../common/enum/role.enum';
import { ActiveUser } from '../common/decorators/active.user.decorator';
import { ActiveUserInterface } from '../common/interfaces/active.user.interface';

@Auth(Role.USER)
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  create(@Body() createDocumentDto: CreateDocumentDto, @ActiveUser() user:ActiveUserInterface){
    return this.documentsService.create(createDocumentDto, user)
  }

  @Get()
  findAll( @ActiveUser() user: ActiveUserInterface){
    return this.documentsService.findAll(user)
  }

  @Get(':id')
  findOne(@Param('id') id: number, @ActiveUser() user: ActiveUserInterface){
    return this.documentsService.findOne(id, user)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDocumentDto: UpdateDocumentDto, @ActiveUser() user: ActiveUserInterface){
    return this.documentsService.update(id, updateDocumentDto, user)
  }

  @Delete(':id')
  remove(@Param('id') id: number, @ActiveUser() user: ActiveUserInterface){
    return this.documentsService.delete(id, user)
  }

}
