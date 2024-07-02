import { Module } from '@nestjs/common';
import { TrechisbService } from './trechisb.service';
import { TrechisbController } from './trechisb.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TrechisbController],
  providers: [TrechisbService],
})
export class TrechisbModule {}
