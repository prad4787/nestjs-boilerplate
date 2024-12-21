import { UserEntity } from "src/domain/entities";
import { PgGenericRepository } from "./pg-generic.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { UserPgSqlEntity } from "../entities";
import { Repository } from "typeorm";
import { IUserRepository } from "src/domain/repositories";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepositoryImp extends PgGenericRepository<UserEntity> implements IUserRepository {
    constructor(
        @InjectRepository(UserPgSqlEntity)
        private readonly userRepository: Repository<UserPgSqlEntity>,
    ) {
        super(userRepository);
    }
    findByEmail(email: string): Promise<UserEntity> {
        return this.userRepository.findOne({ where: { email } });
    }
}