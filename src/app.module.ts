import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TfachisadatatransferModule } from './tfachisadatatransfer/tfachisadatatransfer.module';
import { TfachisabdatatransferModule } from './tfachisabdatatransfer/tfachisabdatatransfer.module';
import { TcpccModule } from './tcpcc/tcpcc.module';
import { TcpcbModule } from './tcpcb/tcpcb.module';
import { TrechisaModule } from './trechisa/trechisa.module';
import { TrechisbModule } from './trechisb/trechisb.module';
import { TrecdiaModule } from './trecdia/trecdia.module';
import { TrecdibModule } from './trecdib/trecdib.module';
import { TcppcModule } from './tcppc/tcppc.module';
import { TcppbModule } from './tcppb/tcppb.module';
import { TcompraModule } from './tcompra/tcompra.module';
import { TcomprabModule } from './tcomprab/tcomprab.module';
import { TpagdiaModule } from './tpagdia/tpagdia.module';
import { TpagdiabModule } from './tpagdiab/tpagdiab.module';
import { VbantraaModule } from './vbantraa/vbantraa.module';
import { VbantrabModule } from './vbantrab/vbantrab.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),

    //db User/documents
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.POSTGRES_SSL === "true",
      extra: {
        ssl:
        process.env.POSTGRES_SSL === "true"
        ? {
          rejectUnauthorized: false,
        }
        : null,
      },
    }),
    
    // db1 dataToTransfer
    TypeOrmModule.forRoot({
        name:'dataToTransfer',
        type: 'mysql',
        host: process.env.MYSQL_DB_HOST,
        port: parseInt(process.env.MYSQL_DB_PORT),
        username: process.env.MYSQL_DB_USERNAME,
        password: process.env.MYSQL_DB_PASSWORD,
        database: process.env.MYSQL_DB_NAME,
        autoLoadEntities: true
    }),
      
    //   //db2 dataNew
      TypeOrmModule.forRoot({
        name: 'secondDataSource',
        type: "mysql",
        host: process.env.DB_HOST2,
        port: parseInt(process.env.DB_PORT2),
        username: process.env.DB_USERNAME2,
        password: process.env.DB_PASSWORD2,
        database: process.env.DB_NAME2,
        autoLoadEntities: true,
      }),
      
    UsersModule,
    
    AuthModule,
    
    TfachisadatatransferModule,
    
    TfachisabdatatransferModule,
    
    TcpccModule,
    
    TcpcbModule,
    
    TrechisaModule,
    
    TrechisbModule,
    
    TrecdiaModule,
    
    TrecdibModule,
    
    TcppcModule,
    
    TcppbModule,
    
    TcompraModule,
    
    TcomprabModule,
    
    TpagdiaModule,
    
    TpagdiabModule,
    
    VbantraaModule,
    
    VbantrabModule,

    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
