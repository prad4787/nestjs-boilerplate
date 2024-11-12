import { Controller, Get, Inject } from '@nestjs/common';
import { IUserService } from 'src/domain/services';
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
