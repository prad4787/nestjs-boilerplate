import { Module } from "@nestjs/common";
import { UserServiceImp } from "./user.service";
import { DataSourceModule } from "src/infra/datasource/datasource.module";

@Module({
    imports: [
        DataSourceModule
    ],
    providers: [{
        provide: "IUserService",
        useClass: UserServiceImp
    }],
    exports: [UserServiceImp],
})
export class UserServiceModule {}