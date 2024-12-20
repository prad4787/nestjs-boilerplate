import { IUserRepository } from "../repositories";

export interface IDatasource {
    userRepository: IUserRepository;
} 