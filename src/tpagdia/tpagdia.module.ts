import { Module } from '@nestjs/common';
import { TpagdiaService } from './tpagdia.service';
import { TpagdiaController } from './tpagdia.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TpagdiaController],
  providers: [TpagdiaService],
})
export class TpagdiaModule {}
