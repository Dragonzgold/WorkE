import { Module } from '@nestjs/common';
import { TfachisadatatransferService } from './tfachisadatatransfer.service';
import { TfachisadatatransferController } from './tfachisadatatransfer.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [TfachisadatatransferController],
  providers: [TfachisadatatransferService],
})
export class TfachisadatatransferModule {}
