import { AdminEntity } from "../entities";
import { IGenericRepository } from "../repositories";

export abstract class Datasource {
    admin: IGenericRepository<AdminEntity>;
}