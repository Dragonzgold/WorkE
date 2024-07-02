import { Module } from '@nestjs/common';
import { TfachisabdatatransferService } from './tfachisabdatatransfer.service';
import { TfachisabdatatransferController } from './tfachisabdatatransfer.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tfachisabdatatransfer } from './entities/tfachisabdatatransfer.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([Tfachisabdatatransfer]), AuthModule],
  controllers: [TfachisabdatatransferController],
  providers: [TfachisabdatatransferService],
})
export class TfachisabdatatransferModule {}
