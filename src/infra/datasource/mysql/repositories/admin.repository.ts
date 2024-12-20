import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from 'src/domain/entities';
import { IAdminRepository } from 'src/domain/repositories';
import { Repository } from 'typeorm';
import { AdminMysqlEntity } from '../entities';

@Injectable()
export class AdminRepositoryImp implements IAdminRepository {
  constructor(
    @InjectRepository(AdminMysqlEntity)
    private readonly userRepository: Repository<AdminMysqlEntity>,
  ) {}
  findByEmail(email: string): Promise<AdminEntity[]> {
    throw new Error('Method not implemented.');
  }
  getAll(condition?: {}, relations?: any, order?: {}): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getOne(condition: any, relations?: any): Promise<AdminEntity> {
    throw new Error('Method not implemented.');
  }
  create(item: AdminEntity): Promise<AdminEntity> {
    throw new Error('Method not implemented.');
  }
  update(condition: {}, item: AdminEntity): Promise<AdminEntity> {
    throw new Error('Method not implemented.');
  }
  findOrCreate(condition: {}, item: AdminEntity): Promise<AdminEntity> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<AdminEntity[]> {
    return this.userRepository.find();
  }
}
