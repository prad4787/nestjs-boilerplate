import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ControllerModule } from './infra/controllers';
import { MysqlModule } from './infra/datasource/mysql/mysql.module';
import { DataSourceModule } from './infra/datasource/datasource.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DataSourceModule,
    ControllerModule,
    MysqlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
