export abstract class IBaseUsecase<T> {
  abstract execute(...args: any): Promise<T>;

  static get REPOSITORY(): string {
    return this.name
      .replace(/(A-Z)/g, ' $1')
      .replace(/usecase/gi, '')
      .trim()
      .split(' ')
      .join('_')
      .toUpperCase();
  }
}
