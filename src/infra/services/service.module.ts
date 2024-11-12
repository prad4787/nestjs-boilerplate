import { Module } from '@nestjs/common';
import { DataSourceModule } from '../datasource/datasource.module';
import { UserServiceImp } from './user/user.service';

@Module({
  imports: [DataSourceModule],
  exports: [UserServiceImp],
  providers: [UserServiceImp],
})
export class ServiceModule {}
