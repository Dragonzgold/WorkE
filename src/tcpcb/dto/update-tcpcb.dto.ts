import { PartialType } from '@nestjs/mapped-types';
import { CreateTcpcbDto } from './create-tcpcb.dto';

export class UpdateTcpcbDto extends PartialType(CreateTcpcbDto) {}
