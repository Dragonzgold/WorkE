import { Module } from '@nestjs/common';
import { TrecdiaService } from './trecdia.service';
import { TrecdiaController } from './trecdia.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TrecdiaController],
  providers: [TrecdiaService],
})
export class TrecdiaModule {}
