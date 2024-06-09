import { UseGuards, applyDecorators } from "@nestjs/common";
import { Roles } from "./roles.decorator";
import { AuthGuard } from "../guard/auth.guard";
import { RolesGuard } from "../guard/roles.guard";
import { Role } from "src/common/enum/role.enum";

export function Auth(role:Role){
    return applyDecorators(Roles(role), UseGuards(AuthGuard, RolesGuard))
}