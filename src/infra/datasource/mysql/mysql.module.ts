import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConnection } from 'src/common/database/mysql.connection';
import { UserMysqlEntity } from './entities';

@Module({
  imports: [
    ConfigModule,
    MysqlConnection.connect(),
    TypeOrmModule.forFeature([UserMysqlEntity]),
  ],
  exports: [],
  providers: [],
})
export class MysqlModule {}
