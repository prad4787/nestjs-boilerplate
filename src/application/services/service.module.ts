import { Global, Module } from '@nestjs/common';
import { UserServiceImp } from './user/user.service';
import { DataSourceModule } from 'src/infra/datasource/datasource.module';

@Global()
@Module({
  imports: [DataSourceModule],
  exports: [UserServiceImp],
  providers: [UserServiceImp],
})
export class ServiceModule {}
