import { Module } from '@nestjs/common';
import { TrechisaService } from './trechisa.service';
import { TrechisaController } from './trechisa.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TrechisaController],
  providers: [TrechisaService],
})
export class TrechisaModule {}
