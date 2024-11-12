import { Global, Module } from '@nestjs/common';
import { MysqlModule } from './mysql/mysql.module';

@Global()
@Module({
  imports: [MysqlModule],
  exports: [MysqlModule],
})
export class DataSourceModule {}
