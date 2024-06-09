import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from "bcryptjs"
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ){}

  async register({name,nameUser,email,password}:RegisterDto){
    //buscar un correo
    const verifyEmail = await this.userService.findOneEmail(email);

    //buscar nombre de usuario
    const verifyNameuser = await this.userService.findOneNameUser(nameUser);

    //Verificar si existe el email
    if(verifyEmail){
      throw new BadRequestException('El correo ya esta en uso');
    }

    //Verificar si existe el nombre de usuario
    if(verifyNameuser){
      throw new BadRequestException('Ya existe ese nombre de usuario');
    }

    //hasheo de contraseña
    const hashedPassword = await bcryptjs.hash(password,10);

    await this.userService.createUser({
      name,
      nameUser,
      email,
      password: hashedPassword,
    });


    return {
      message: "El usuario fue creado con exito"
    };
  }

  async login({nameUser, password}: LoginDto){
    //capturador para la busqueda del nombre de usuario
    const user = await this.userService.findOneNameUser(nameUser);

    //Verificar si existe el nombre de usuario
    if(!user){
      throw new UnauthorizedException("Usuario invalido")
    }

    //Comprobacion de la contraseña con la bdd
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    //Verificacion y mensaje de error de la contraseña
    if(!isPasswordValid){
      throw new UnauthorizedException("Contraseña incorrecta");
    }

    const payload = {nameUser: user.nameUser, email: user.email, rol: user.rol};

    const token = await this.jwtService.signAsync(payload);

    //Lo que devolvemos
    return{
      nameUser: user.nameUser,
      rol: user.rol,
      email: user.email,
      token: token
    };
  }
}
