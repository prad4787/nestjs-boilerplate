import { Inject, Injectable } from '@nestjs/common';
import { IAdminRepository } from 'src/domain/repositories';
import { IAdminService } from 'src/domain/services';

@Injectable()
export class AdminServiceImp  implements IAdminService {
  constructor(
    @Inject(IAdminRepository)
    private readonly adminRepo: IAdminRepository,
  ) {}

  async getUsers() {
    return this.adminRepo.getAll();
  }
}
