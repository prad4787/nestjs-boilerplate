import { Controller, Get, Inject } from '@nestjs/common';

@Controller()
export class UserController {
 

  @Get()
  async findAll() {
    return "hello";
  }
}
