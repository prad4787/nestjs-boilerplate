import { BaseEntity } from '.';

export class UserEntity extends BaseEntity {
  email: string;
  password: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  ip: string;
  last_login_at: Date;
}
