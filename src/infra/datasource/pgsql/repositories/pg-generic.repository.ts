import { rescue } from "src/common/helpers";
import { RequestPagination, ResponsePagination } from "src/common/types";
import { GenericRepository } from "src/domain/repositories/generic.repository";
import { NotFoundException } from "src/infra/server/nestjs/exceptions";
import { Repository } from "typeorm";

type ConditionType = {
    [key: string]: any | any[];
};

const parseCondition = (condition: ConditionType) => {
    // check if condition have where
    if (!(condition?.where)) {
        return { where: condition };
    }
    return condition;
};


export class PgGenericRepository<T> implements GenericRepository<T> {
    protected _repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this._repository = repository;
    }
    async getAll(
        condition: ConditionType = {},
        relations: {},
    ): Promise<ResponsePagination<T>> {
        condition = parseCondition(condition);
        return rescue<ResponsePagination<T>>(async (): Promise<ResponsePagination<T>> => {
            const paginationQuery: RequestPagination = {
                page: 1,
                limit: 10,
            };
            const [data, total] = await this._repository.findAndCount({
                ...condition,
                skip:
                    ((paginationQuery?.page || 1) - 1) * (paginationQuery?.limit || 10),
                take: paginationQuery?.limit || 10,
                relations: { ...relations },
                order: { id: 'DESC' } as any,
            });
            return {
                data,
                page: paginationQuery.page,
                count: data.length,
                total,
                next: null,
                prev: null,
            };
        });
    }
    async getOne(condition: ConditionType, relations?: {} | undefined): Promise<T> {
        condition = parseCondition(condition);
        return rescue<T>(async (): Promise<T> => {
            const item: T = await this._repository.findOne({
                ...condition,
                relations: { ...relations },
            });
            if (item) {
                return item;
            } else {
                const name = this._repository.metadata.targetName.replace(
                    'Entity',
                    '',
                ).replace('Pg', '');
                throw new NotFoundException(
                    name + ' not found',
                    404,
                );
            }
        });
    }
    async create(item: T): Promise<T> {
        return rescue<T>(async (): Promise<T> => {
            return this._repository.save(item);
        });
    }
    async update(condition: ConditionType, item: any) {
        return rescue<T>(async (): Promise<T> => {
            const oldItem: T = await this.getOne(condition);
            if (!oldItem) {
                const name = this._repository.metadata.targetName.replace('Entity', '');
                throw new NotFoundException(
                    name + ' not found',
                    404,
                );
            }
            await this._repository.update({...condition} as any, item);
            return this._repository.findOneBy({...condition} as any);
        });
    }

    async findOrCreate(condition: ConditionType, item: T): Promise<T> {
        return rescue<T>(async (): Promise<T> => {
            const oldItem: T = await this._repository.findOne(condition);
            if (!oldItem) {
                return this._repository.save(item);
            }
            return oldItem;
        });
    }
}