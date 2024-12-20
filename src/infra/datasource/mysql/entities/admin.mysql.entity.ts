import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { AdminEntity } from 'src/domain/entities';
import { AdminStatus } from 'src/common/enum';

@Entity("admin")
export class AdminMysqlEntity extends BaseEntity implements AdminEntity {
  @Column({
    default: AdminStatus.ACTIVE,
  })
  status: AdminStatus;

  @Column({})
  first_name: string;

  @Column({})
  last_name: string;

  @Column({})
  email: string;

  @Column({
    nullable: true,
    default: null,
  })
  last_login_at: Date;

  @Column()
  password: string;
}
