import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/application/dto/user/user.dto";
import { UserFactory } from "src/application/factories";
import { UserServiceImp } from "src/application/services/user";
import { UserEntity } from "src/domain/entities";
import { IUserService } from "src/domain/services";
import { IBaseUsecase } from "src/domain/usecases";
import { ApiException } from "src/infra/server/nestjs/exceptions";

@Injectable()
export class CreateUserUsecase implements IBaseUsecase<UserEntity> {

    constructor(
        @Inject(UserServiceImp)
        private readonly userService: IUserService
    ) {}


    async execute(dto: CreateUserDto): Promise<UserEntity> {
        // check if user already exists
        const oldUser = await this.userService.findByEmail(dto.email);
        if (oldUser) {
            throw new ApiException("User already exists");
        }
        return await this.userService.create(UserFactory.createUserEntity(dto));
    }

    

}