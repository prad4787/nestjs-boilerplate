import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/application/dto";
import { UserEntity } from "src/domain/entities";

@Injectable()
export class UserFactory {
    static createUserEntity (dto: CreateUserDto): UserEntity {
        const user = new UserEntity();
        user.email = dto.email;
        user.first_name = dto.first_name;
        user.middle_name = dto.middle_name;
        user.last_name = dto.last_name;
        user.password = dto.password;
        return user;
    }
}