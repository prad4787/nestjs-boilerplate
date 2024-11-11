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
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: () => null,
  })
  deletedAt: Date;

  //   @BeforeInsert()
  //   setCreateAtTimestamps() {
  //     this.createdAt = new Date(Date.now());
  //   }

  //   @BeforeUpdate()
  //   setUpdateAtTimestamps() {
  //     this.updatedAt = new Date(Date.now());
  //   }

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
