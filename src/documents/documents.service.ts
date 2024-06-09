import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from './entities/document.entity';
import { Repository } from 'typeorm';
import { ActiveUserInterface } from 'src/common/interfaces/active.user.interface';
import { Role } from 'src/common/enum/role.enum';

@Injectable()
export class DocumentsService {

  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>
  ){}

  async create(createDocumentDto: CreateDocumentDto, user: ActiveUserInterface){
    return await this.documentRepository.save({
      ...createDocumentDto,
      nameUser: user.nameUser
    });
  }

  async findAll(user: ActiveUserInterface){

    if(user.rol === Role.ADMIN){
      return this.documentRepository.find()
    }

    return await this.documentRepository.find({
      where: {nameUser: user.nameUser},
    });
  }

  async findOne(id: number, user: ActiveUserInterface){
    const doc = await this.documentRepository.findOneBy({id})

    if(!doc){
      throw new BadRequestException("No se encontro ningun documento")
    }

    this.validateOwnership(doc, user)

    return doc
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto, user: ActiveUserInterface){
    await this.findOne(id, user)

    await this.documentRepository.update(id,{
      ...updateDocumentDto,
      nameUser: user.nameUser
    })

    return "Cambios realizaods con exito"
  }

  async delete(id: number, user: ActiveUserInterface){
    await this.findOne(id, user)
    return this.documentRepository.softDelete({id})
  }


  private validateOwnership(document: Document, user:ActiveUserInterface){
    if(user.rol !== Role.ADMIN && document.nameUser !== user.nameUser){
      throw new BadRequestException("Tu no tienes permiso para ver esta informacion")
    }
  }
}
