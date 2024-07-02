import { PartialType } from '@nestjs/swagger';
import { CreateTpagdiabDto } from './create-tpagdiab.dto';

export class UpdateTpagdiabDto extends PartialType(CreateTpagdiabDto) {}
