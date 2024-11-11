import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import routes from './router';
import { UserControllerModule } from './user/user.controller.module';

@Module({
  imports: [UserControllerModule, RouterModule.register(routes)],
  controllers: [],
  exports: [],
})
export class ControllerModule {}
