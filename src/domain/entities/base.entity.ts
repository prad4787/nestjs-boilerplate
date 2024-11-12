export abstract class BaseEntity {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;

  static get InjectableString(): string {
    return (
      this.name
        .replace(/(A-Z)/g, ' $1')
        .replace(/entity/gi, '')
        .trim()
        .split(' ')
        .join('_')
        .toUpperCase() + '_REPOSITORY'
    );
  }
}
