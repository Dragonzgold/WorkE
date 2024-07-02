import { PartialType } from '@nestjs/swagger';
import { CreateVbantraaDto } from './create-vbantraa.dto';

export class UpdateVbantraaDto extends PartialType(CreateVbantraaDto) {}
