import { AdminStatus } from 'src/common/enum/admin-status.enum';
import { BaseEntity } from '.';

export class UserEntity extends BaseEntity {
  account: string;
  password: string;
  balance: number;
  parent_id: number;
  role_id: number;
  status: AdminStatus;
  child_count: number;
  ip: string;
  time_zone: number;
  attempts: number;
  last_login_at: Date;
}
