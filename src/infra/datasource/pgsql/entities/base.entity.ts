import {
  AfterUpdate,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn({})
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @UpdateDateColumn({
    nullable: true,
    type: 'timestamp',
    default: null,
  })
  updated_at: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  deleted_at: Date;

  @AfterUpdate()
  afterUpdate() {
    this.updated_at = new Date();
  }

  softDelete() {
    this.deleted_at = new Date();
  }


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
