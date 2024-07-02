import { Module } from '@nestjs/common';
import { VbantraaService } from './vbantraa.service';
import { VbantraaController } from './vbantraa.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [VbantraaController],
  providers: [VbantraaService],
})
export class VbantraaModule {}
