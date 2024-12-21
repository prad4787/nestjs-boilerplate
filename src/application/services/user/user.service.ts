import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities';
import { IUserRepository } from 'src/domain/repositories';
import { IUserService } from 'src/domain/services';

@Injectable()
export class UserServiceImp implements IUserService {

  constructor(
    @Inject(UserEntity.REPOSITORY)
    private readonly _repository: IUserRepository
  ) { }


  findByEmail(email: string): Promise<UserEntity> {
    return this._repository.findByEmail(email);
  }

  create(entity: UserEntity): Promise<UserEntity> {
    return this._repository.create(entity);
  }

}
