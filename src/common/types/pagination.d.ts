export type ResponsePagination<T> = {
    data: T[];
    page: number;
    count: number;
    total: number;
    next: number | null;
    prev: number | null;
};


export type RequestPagination = {
    page: number;
    limit: number;
};