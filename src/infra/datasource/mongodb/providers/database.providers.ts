
import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';
import InjectableString from 'src/common/constants/injectable.string';



/**
 * 
 * MONGO_HOST=mongo
MONGO_PORT=27017
MONGO_USER=mongo
MONGO_PASSWORD=mongo
MONGO_DB=mongo
 */


function generateConnectionString(config: ConfigService) {
    return `mongodb://${config.get<string>('MONGO_USER')}:${config.get<string>(
        'MONGO_PASSWORD',
    )}@${config.get<string>('MONGO_HOST')}:${config.get<number>(
        'MONGO_PORT',
    )}/${config.get<string>('MONGO_DB')}`;
}

export const databaseProviders = [
    {
        provide: InjectableString.MONGODB_DATASOURCE,
        inject: [ConfigService],
        useFactory: async (config: ConfigService): Promise<typeof mongoose> => {
            // generate mongodb connection string
            const connectionString = generateConnectionString(config);
            return mongoose.connect(connectionString);
        },
    },
];
