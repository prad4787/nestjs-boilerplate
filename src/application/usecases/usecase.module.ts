import { Global, Module } from "@nestjs/common";
import { UserUseCaseModule } from "./user";

@Global()
@Module({
    imports: [UserUseCaseModule],
    exports: [UserUseCaseModule],
})
export class UseCaseModule {}