import { AdminStatus } from 'src/common/enum';
import { BaseEntity } from '.';

export class AdminEntity extends BaseEntity {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  status: AdminStatus;
}
