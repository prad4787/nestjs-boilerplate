import { UserEntity } from "../entities";

export interface IUserService {
  getUsers(): Promise<UserEntity[]>;
}
