import { RelationType, ResponsePagination } from "src/common/types";



export abstract class GenericRepository<T> {
  abstract getAll(
    condition?: {},
    relations?: RelationType[] | RelationType,
    order?: {},
  ): Promise<ResponsePagination<T>>;

  abstract getOne(condition: any, relations?: RelationType[] | RelationType): Promise<T>;

  abstract create(item: T): Promise<T>;

  abstract update(condition: {}, item: T): Promise<T>;

  abstract findOrCreate(condition: {}, item: T): Promise<T>;
}