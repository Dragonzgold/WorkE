import { Module } from '@nestjs/common';
import { TcppcService } from './tcppc.service';
import { TcppcController } from './tcppc.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TcppcController],
  providers: [TcppcService],
})
export class TcppcModule {}
