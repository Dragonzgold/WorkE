import { Module } from '@nestjs/common';
import { TcomprabService } from './tcomprab.service';
import { TcomprabController } from './tcomprab.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TcomprabController],
  providers: [TcomprabService],
})
export class TcomprabModule {}
