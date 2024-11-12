import { Controller, Get, Inject } from '@nestjs/common';
import { IsPublic } from 'src/common/decorators';
import { IUserService } from 'src/domain/services';
import { ApiException } from 'src/infra/server/nestjs/exceptions/api.exception';
import { UserServiceImp } from 'src/infra/services/user';

@Controller()
export class UserController {
  constructor(
    @Inject(UserServiceImp)
    private readonly userService: IUserService,
  ) {}

  @Get()
  async findAll() {
    return this.userService.getUsers();
  }
}
