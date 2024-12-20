import { Module } from '@nestjs/common';
import { UserServiceImp } from './user/user.service';
import { DataSourceModule } from 'src/infra/datasource/datasource.module';

@Module({
  imports: [DataSourceModule],
  exports: [],
  providers: [],
})
export class ServiceModule {}
