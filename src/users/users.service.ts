import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ActiveUserInterface } from 'src/common/interfaces/active.user.interface';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async createUser(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findOneEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async findOneNameUser(nameUser: string) {
    return await this.userRepository.findOneBy({ nameUser })
  }

  async getAllUsers(){
    return this.userRepository.find()
  }

  async updateUser(user: string, updateUserDto: UpdateUserDto) {

    const validateUser = await this.findOneNameUser(user);
    this.validateUser(validateUser)

    try {
      return await this.userRepository.update(validateUser.id,{
        ...updateUserDto
      })
    } catch (error) {
      throw new BadRequestException("No hubo nada para actualizar")
    }
  }

  async deleteUser(nameUser: string){
    const validateUser = await this.findOneNameUser(nameUser)
    this.validateUser(validateUser)
    try {
      return this.userRepository.softDelete(validateUser.id)
    } catch (error) {
      throw new BadRequestException("No hubo nada Que eliminar")
    }

  }

  private validateUser(nameUser: User) {
    try {
      if (nameUser === null) {
        throw new BadRequestException("El usuario que buscas no existe")
      }
    } catch (error) {
      console.error(error)
    }
  }
}
