import { Module } from '@nestjs/common';
import { TcppbService } from './tcppb.service';
import { TcppbController } from './tcppb.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TcppbController],
  providers: [TcppbService],
})
export class TcppbModule {}
