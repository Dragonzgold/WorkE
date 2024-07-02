import { Module } from '@nestjs/common';
import { VbantrabService } from './vbantrab.service';
import { VbantrabController } from './vbantrab.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [VbantrabController],
  providers: [VbantrabService],
})
export class VbantrabModule {}
