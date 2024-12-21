import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  DataSourceOptions } from 'typeorm';

@Injectable()
export class PgsqlConnection {
  static connect() {
    return TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const configs: DataSourceOptions = {
          type: 'postgres',
          host: config.get<string>('PGSQL_HOST'),
          port: config.get<number>('PGSQL_PORT'),
          username: config.get<string>('PGSQL_USER'),
          password: config.get<string>('PGSQL_PASSWORD'),
          database: config.get<string>('PGSQL_DB'),
          entities: [__dirname + '/../../**/**/*.pgsql.entity{.ts,.js}'],
          // logging: true,
          synchronize: true,
          
        };
        return (configs);
      },
    });
  }

  static get InjectString(): string {
    return 'TypeOrm_PGSQL_Connection'.toUpperCase();
  }
}
