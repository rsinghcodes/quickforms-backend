import { User } from '../user/base/User';

export class UserInfo implements Partial<User> {
  id!: string;
  username!: string;
  roles!: string[];
  accessToken?: string;
}
