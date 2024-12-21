import { ConfigService } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";

export const DATA_SOURCE_PGSQL = 'DATA_SOURCE_PGSQL';
export const pgProviders = [{
    provide: DATA_SOURCE_PGSQL,
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
            logging: true,
            synchronize: true,

        };
        return await new DataSource(configs).initialize();
    },
},


];