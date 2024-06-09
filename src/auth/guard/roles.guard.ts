import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from 'src/common/enum/role.enum';
import { ROLES_KEY } from '../decorator/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector){}

  canActivate(context: ExecutionContext,): boolean{
    const requiredRole = this.reflector.getAllAndOverride<Role>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ])

    if(!requiredRole){
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    if(user.rol === Role.ADMIN){
      return true
    }

    return requiredRole === user.rol;
  }
}