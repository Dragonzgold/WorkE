import { PartialType } from '@nestjs/swagger';
import { CreateTcppbDto } from './create-tcppb.dto';

export class UpdateTcppbDto extends PartialType(CreateTcppbDto) {}
