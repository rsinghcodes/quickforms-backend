import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Credentials } from '../auth/Credentials';
import { UserInfo } from './UserInfo';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() body: Credentials): Promise<UserInfo> {
    return this.authService.login(body);
  }
}
