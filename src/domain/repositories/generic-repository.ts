
export abstract class IGenericRepository<T> {
  abstract getAll(
    condition?: {},
    relations?: any, // Relation
    order?: {},
  ): Promise<any>; // pagination

  abstract findByEmail(email: string): Promise<T[]>;

  abstract getOne(condition: any, relations?: any): Promise<T>;

  abstract create(item: T): Promise<T>;

  abstract update(condition: {}, item: T): Promise<T>;

  abstract findOrCreate(condition: {}, item: T): Promise<T>;
}
