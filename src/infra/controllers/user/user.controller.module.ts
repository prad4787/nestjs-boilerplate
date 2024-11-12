import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ServiceModule } from 'src/infra/services/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [UserController],
  providers: [],
  exports: [],
})
export class UserControllerModule {}
