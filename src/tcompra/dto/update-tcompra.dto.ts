import { PartialType } from '@nestjs/swagger';
import { CreateTcompraDto } from './create-tcompra.dto';

export class UpdateTcompraDto extends PartialType(CreateTcompraDto) {}
