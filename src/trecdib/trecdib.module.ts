import { Module } from '@nestjs/common';
import { TrecdibService } from './trecdib.service';
import { TrecdibController } from './trecdib.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TrecdibController],
  providers: [TrecdibService],
})
export class TrecdibModule {}
