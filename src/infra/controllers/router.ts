import { Routes } from '@nestjs/core';
import { UserController } from './user/user.controller';
import { UserControllerModule } from './user/user.controller.module';

const routes: Routes = [
  {
    path: '/users',
    children: [UserControllerModule],
  },
];

export default routes;
