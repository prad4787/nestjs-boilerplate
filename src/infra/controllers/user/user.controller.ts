import { Controller, Get, Inject } from '@nestjs/common';
import { IsPublic } from 'src/common/decorators';
import { IAdminService } from 'src/domain/services';
import { ApiException } from 'src/infra/server/nestjs/exceptions/api.exception';
import { IUserRepository } from 'src/application/services/admin';

@Controller()
export class UserController {
  constructor(
    @Inject(IUserRepository)
    private readonly userService: IAdminService,
  ) {}

  @Get()
  async findAll() {
    return this.userService.getUsers();
  }
}
