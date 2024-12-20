import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class PgsqlConnection {
  static connect() {
    return TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('POSTGRES_HOST'),
        port: config.get<number>('POSTGRES_PORT'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PASSWORD'),
        database: config.get<string>('POSTGRES_DATABASE'),
        entities: [__dirname + '/../../**/**/*.pgsql.entity{.ts,.js}'],
        autoLoadEntities: true,
        logging: true,
        synchronize: true,
      }),
    });
  }

  static get InjectString(): string {
    return 'TypeOrm_PGSQL_Connection'.toUpperCase();
  }
}
