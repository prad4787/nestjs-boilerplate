import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfraModule } from './infra/infra.module';
import { UseCaseModule } from './application/usecases/usecase.module';
import { ServiceModule } from './application/services/service.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './infra/server/nestjs/exceptions';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ServiceModule,
    UseCaseModule,
    InfraModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
