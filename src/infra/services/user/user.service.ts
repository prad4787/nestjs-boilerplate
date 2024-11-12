import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/repositories';
import { IUserService } from 'src/domain/services';
import { UserRepositoryImp } from 'src/infra/datasource/mysql/repositories';

@Injectable()
export class UserServiceImp  implements IUserService {
  constructor(
    @Inject(UserRepositoryImp)
    private readonly userRepo: IUserRepository,
  ) {}

  async getUsers() {
    return this.userRepo.findAll();
  }
}
