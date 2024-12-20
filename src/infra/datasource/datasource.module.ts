import { Global, Module } from '@nestjs/common';
import { PgsqlModule } from './pgsql/pgsql.module';

// @Global()
@Module({
  imports: [PgsqlModule],
  exports: [PgsqlModule],
})
export class DataSourceModule {}
