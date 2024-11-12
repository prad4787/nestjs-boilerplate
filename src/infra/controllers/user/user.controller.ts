import { Controller, Get } from '@nestjs/common';
import { UserService } from './../../services/user/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.getUsers();
  }
}
