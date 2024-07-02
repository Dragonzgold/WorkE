import { PartialType } from '@nestjs/swagger';
import { CreateTcomprabDto } from './create-tcomprab.dto';

export class UpdateTcomprabDto extends PartialType(CreateTcomprabDto) {}
