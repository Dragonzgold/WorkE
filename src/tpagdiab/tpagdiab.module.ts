import { Module } from '@nestjs/common';
import { TpagdiabService } from './tpagdiab.service';
import { TpagdiabController } from './tpagdiab.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TpagdiabController],
  providers: [TpagdiabService],
})
export class TpagdiabModule {}
