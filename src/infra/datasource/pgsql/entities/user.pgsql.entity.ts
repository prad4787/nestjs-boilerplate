import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from 'src/domain/entities';

@Entity({
  name: 'users',
})
export class UserPgSqlEntity extends BaseEntity implements UserEntity {
  @Column({})
  first_name: string;

  @Column({
    nullable: true,
    default: null,
  })
  middle_name: string;

  @Column({})
  last_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    nullable: true,
    default: '',
  })
  ip: string;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  last_login_at: Date;

  @Column()
  password: string;
}
