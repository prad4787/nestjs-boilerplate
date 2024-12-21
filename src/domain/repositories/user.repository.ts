import { UserEntity } from '../entities';
import { GenericRepository } from './generic.repository';

export interface IUserRepository extends GenericRepository<UserEntity> {
    findByEmail(email: string): Promise<UserEntity>;
}
