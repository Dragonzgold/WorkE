import { PartialType } from '@nestjs/mapped-types';
import { LoginDto } from 'src/auth/dto/login.dto';
// import { CreateUserDto } from './create-user.dto';


export class UpdateUserDto extends PartialType(LoginDto) {}
