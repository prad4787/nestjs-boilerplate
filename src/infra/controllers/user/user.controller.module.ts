import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DataSourceModule } from 'src/infra/datasource/datasource.module';

@Module({
  imports: [DataSourceModule],
  controllers: [UserController],
  providers: [],
  exports: [UserController],
})
export class UserControllerModule {}
