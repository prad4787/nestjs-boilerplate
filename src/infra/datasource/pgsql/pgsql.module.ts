import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PgsqlConnection } from 'src/common/database/pgsql.connection';


@Module({
  imports: [
    PgsqlConnection.connect(),
  ],
  exports: [],
  providers: [],
})
export class PgsqlModule {}
