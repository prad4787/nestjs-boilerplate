import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/application/dto';
import { UserEntity } from 'src/domain/entities';
import { IUserService } from 'src/domain/services';

@Injectable()
export class UserServiceImp implements IUserService {
  create(dto: CreateUserDto): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

}
