import { BaseEntity } from ".";

export class UserEntity extends BaseEntity {
  name: string;
  email: string;
  password: string;
}
