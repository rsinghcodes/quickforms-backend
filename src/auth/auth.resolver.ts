import { LoginArgs } from './LoginArgs';
import { UserInfo } from './UserInfo';
import { AuthService } from './auth.service';
import { UserData } from './userData.decorator';

export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  async login(args: LoginArgs): Promise<UserInfo> {
    return this.authService.login(args.credentials);
  }

  async userInfo(@UserData() entityInfo: UserInfo): Promise<UserInfo> {
    return entityInfo;
  }
}
