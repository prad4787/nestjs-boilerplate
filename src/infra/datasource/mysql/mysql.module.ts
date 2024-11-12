import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConnection } from 'src/common/database/mysql.connection';
import { UserMysqlEntity } from './entities';
import { UserRepositoryImp } from './repositories/user.repository';

@Module({
  imports: [
    ConfigModule,
    MysqlConnection.connect(),
    TypeOrmModule.forFeature([UserMysqlEntity]),
  ],
  exports: [UserRepositoryImp],
  providers: [UserRepositoryImp],
})
export class MysqlModule {}
