import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/entities';
import { IUserRepository } from 'src/domain/repositories/user.repository';
import { Repository } from 'typeorm';
import { UserMysqlEntity } from '../entities';

@Injectable()
export class UserRepositoryImp implements IUserRepository {
  constructor(
    @InjectRepository(UserMysqlEntity)
    private readonly userRepository: Repository<UserMysqlEntity>,
  ) {}
  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
