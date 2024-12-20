import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class MysqlConnection {
  static connect() {
    return TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('PGSQL_HOST'),
        port: config.get<number>('PGSQL_PORT'),
        username: config.get<string>('PGSQL_USER'),
        password: config.get<string>('PGSQL_PASSWORD'),
        database: config.get<string>('PGSQL_DATABASE'),
        entities: [__dirname + '/../../**/**/*.pgsql.entity{.ts,.js}'],
        autoLoadEntities: true,
        logging: true,
        synchronize: false,
      }),
    });
  }

  static get InjectString(): string {
    return 'TypeOrm_PGSQL_Connection'.toUpperCase();
  }
}
