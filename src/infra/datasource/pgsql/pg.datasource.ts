import { Injectable } from "@nestjs/common";
import { IDatasource } from "src/domain/datasource";
import { IUserRepository } from "src/domain/repositories";

@Injectable()
export class PgsqlDatasource implements IDatasource {
    userRepository: IUserRepository;
}