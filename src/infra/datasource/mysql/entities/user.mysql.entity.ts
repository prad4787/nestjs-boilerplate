import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from 'src/domain/entities';
import { AdminStatus } from 'src/common/enum';

@Entity("admin")
export class UserMysqlEntity extends BaseEntity implements UserEntity {
  @Column({})
  account: string;

  @Column({
    default: 0,
  })
  balance: number;

  @Column({
    nullable: true,
    default: null,
  })
  parent_id: number;

  @Column({})
  role_id: number;

  @Column({
    default: AdminStatus.ACTIVE,
  })
  status: AdminStatus;

  @Column({
    default: 0,
  })
  child_count: number;

  @Column({
    nullable: true,
    default: '',
  })
  ip: string;

  @Column({})
  time_zone: number;

  @Column({
    default: 0,
  })
  attempts: number;

  @Column({
    nullable: true,
    default: null,
  })
  last_login_at: Date;

  @Column()
  password: string;
}
