import { Module } from '@nestjs/common';
import { DataSourceModule } from '../datasource/datasource.module';
import { UserService } from './user/user.service';

@Module({
  imports: [DataSourceModule],
  exports: [UserService],
  providers: [UserService],
})
export class ServiceModule {}
