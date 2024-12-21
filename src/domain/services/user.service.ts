import { CreateUserDto } from "src/application/dto";
import { UserEntity } from "../entities";

export interface IUserService {
  findByEmail(email: string): Promise<UserEntity>
  create(dto: CreateUserDto): Promise<UserEntity>
}
