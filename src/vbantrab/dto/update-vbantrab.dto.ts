import { PartialType } from '@nestjs/swagger';
import { CreateVbantrabDto } from './create-vbantrab.dto';

export class UpdateVbantrabDto extends PartialType(CreateVbantrabDto) {}
