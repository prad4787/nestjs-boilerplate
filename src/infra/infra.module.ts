import { Module } from '@nestjs/common';
import { NestModule } from './server/nestjs/nest.module';
import { ControllerModule } from './controllers';
import { DataSourceModule } from './datasource/datasource.module';

@Module({
  imports: [ControllerModule, NestModule, DataSourceModule],
  controllers: [],
  providers: [],
  exports: [ControllerModule, NestModule, DataSourceModule],
})
export class InfraModule {}
