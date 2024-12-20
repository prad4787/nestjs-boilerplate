import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn({})
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: () => null,
  })
  deleted_at: Date;


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
