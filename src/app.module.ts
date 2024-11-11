import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ControllerModule } from './infra/controllers';
import { MysqlModule } from './infra/datasource/mysql/mysql.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ControllerModule,
    MysqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
