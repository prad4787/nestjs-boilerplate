import { CreateUserDto } from "src/application/dto/user/user.dto";
import { UserEntity } from "src/domain/entities";

export interface ICreateUserUsecase {
    execute(dto: CreateUserDto): Promise<UserEntity>;
}