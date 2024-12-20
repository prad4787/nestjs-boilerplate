import { Module } from '@nestjs/common';
import { PgsqlConnection } from 'src/common/database/pgsql.connection';
import { PgsqlDatasource } from './pg.datasource';


@Module({
  imports: [
    PgsqlConnection.connect(),
  ],
  exports: [
  ],
  providers: [
    {
      provide: "IDatasource",
      useClass: PgsqlDatasource
    }
  ],
})
export class PgsqlModule { }
