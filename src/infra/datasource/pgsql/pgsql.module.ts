import { Module } from '@nestjs/common';
import { PgsqlConnection } from 'src/common/database/pgsql.connection';
import { UserRepositoryImp } from './repositories/user.repository';
import { UserEntity } from 'src/domain/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPgSqlEntity } from './entities';
import { pgProviders } from './providers/pgsql.provider';


@Module({
  imports: [
    PgsqlConnection.connect(),
    TypeOrmModule.forFeature([UserPgSqlEntity])
  ],
 
  providers: [
    // ...pgProviders,
    {
      provide: UserEntity.REPOSITORY,
      useClass: UserRepositoryImp
    }
  ],

  exports: [
    {
      provide: UserEntity.REPOSITORY,
      useClass: UserRepositoryImp
    }
  ],
})
export class PgsqlModule { }
