import { UserEntity } from '../entities';

export interface IUserRepository {
  findAll(): Promise<UserEntity[]>;
}
