import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/application/dto/user/user.dto';
import { UserUseCaseModule } from 'src/application/usecases/user';
import { CreateUserUsecase } from 'src/application/usecases/user/create-user.usecase';
import { IUserService } from 'src/domain/services';

@Controller()
export class UserController {
  constructor(
    @Inject(CreateUserUsecase)
    private readonly createUserUsecase: CreateUserUsecase
  ) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.createUserUsecase.execute(dto);
  }
}
