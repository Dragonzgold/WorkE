import { Module } from '@nestjs/common';
import { TcompraService } from './tcompra.service';
import { TcompraController } from './tcompra.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TcompraController],
  providers: [TcompraService],
})
export class TcompraModule {}
