import { Module } from '@nestjs/common';
import { TcpcbService } from './tcpcb.service';
import { TcpcbController } from './tcpcb.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tcpcb } from './entities/tcpcb.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([Tcpcb]), AuthModule],
  controllers: [TcpcbController],
  providers: [TcpcbService],
})
export class TcpcbModule {}
