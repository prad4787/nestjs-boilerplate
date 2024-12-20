import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/application/dto/user/user.dto";
import { UserEntity } from "src/domain/entities";
import { ICreateUserUsecase } from "src/domain/usecases/users/create-user.usecase";

@Injectable()
export class CreateUserUsecaseImp implements ICreateUserUsecase {

    // i need repository
    execute(dto: CreateUserDto): Promise<UserEntity> {
        // 
        return new Promise((resolve, reject) => {
            resolve(new UserEntity());
        });

    }
}