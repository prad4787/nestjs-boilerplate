export interface IBaseUsecase<T> {
  execute(): Promise<T>;
}
