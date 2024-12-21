import { Module } from "@nestjs/common";
import { CreateUserUsecase } from "./create-user.usecase";

@Module({
    imports: [],
    providers: [
        CreateUserUsecase
    ],
    exports: [CreateUserUsecase],
})
export class UserUseCaseModule { }