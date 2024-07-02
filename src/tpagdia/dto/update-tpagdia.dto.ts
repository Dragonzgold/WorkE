import { PartialType } from '@nestjs/swagger';
import { CreateTpagdiaDto } from './create-tpagdia.dto';

export class UpdateTpagdiaDto extends PartialType(CreateTpagdiaDto) {}
