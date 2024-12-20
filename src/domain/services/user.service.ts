import { AdminEntity } from "../entities";

export interface IAdminService {
  getUsers(): Promise<AdminEntity[]>;
}
