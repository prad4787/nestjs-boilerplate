import { Module } from '@nestjs/common';
import { DataSourceModule } from '../../infra/datasource/datasource.module';

@Module({
  imports: [DataSourceModule],
  exports: [],
  providers: [],
})
export class ServiceModule {}
