import { PartialType } from '@nestjs/mapped-types';
import { CreateTcpccDto } from './create-tcpcc.dto';

export class UpdateTcpccDto extends PartialType(CreateTcpccDto) {}
