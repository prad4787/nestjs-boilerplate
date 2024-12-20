import { CreateUserDto } from "src/application/dto";
import { UserEntity } from "../entities";

export interface IUserService {
  create(dto: CreateUserDto): Promise<UserEntity>
}
