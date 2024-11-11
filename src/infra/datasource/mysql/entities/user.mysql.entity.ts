import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from 'src/domain/entities';

@Entity()
export class UserMysqlEntity extends BaseEntity implements UserEntity {
  @Column()
  name: string;
  @Column()
  email: string;

  @Column()
  password: string;
}
