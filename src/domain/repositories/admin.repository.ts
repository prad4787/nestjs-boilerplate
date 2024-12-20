import { AdminEntity } from '../entities';
import { IGenericRepository } from './generic-repository';

export abstract class IAdminRepository extends IGenericRepository<AdminEntity> {
  abstract findByEmail(email: string): Promise<AdminEntity[]>;
}
