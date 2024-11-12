import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/repositories/user.repository';
import { UserRepositoryImp } from 'src/infra/datasource/mysql/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepositoryImp)
    private readonly userRepo: UserRepositoryImp,
  ) {}

  async getUsers() {
    return this.userRepo.findAll();
  }
}
