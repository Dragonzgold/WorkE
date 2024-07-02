import { PartialType } from '@nestjs/swagger';
import { CreateTcppcDto } from './create-tcppc.dto';

export class UpdateTcppcDto extends PartialType(CreateTcppcDto) {}
