import { Module } from '@nestjs/common';
import { TcpccService } from './tcpcc.service';
import { TcpccController } from './tcpcc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tcpcc } from './entities/tcpcc.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([Tcpcc]), AuthModule],
  controllers: [TcpccController],
  providers: [TcpccService],
})
export class TcpccModule {}
