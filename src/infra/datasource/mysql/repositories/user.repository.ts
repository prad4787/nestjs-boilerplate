import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/entities';
import { IUserRepository } from 'src/domain/repositories';
import { Repository } from 'typeorm';
import { UserMysqlEntity } from '../entities';
import { RelationType, ResponsePagination } from 'src/common/types';

@Injectable()
export class UserRepositoryImp implements IUserRepository {
  constructor(
    @InjectRepository(UserMysqlEntity)
    private readonly userRepository: Repository<UserMysqlEntity>,
  ) {}
  findByEmail(email: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  getAll(condition?: {}, relations?: RelationType[] | RelationType, order?: {}): Promise<ResponsePagination<UserEntity>> {
    throw new Error('Method not implemented.');
  }
  getOne(condition: any, relations?: RelationType[] | RelationType): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  create(item: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  update(condition: {}, item: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  findOrCreate(condition: {}, item: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  
}
