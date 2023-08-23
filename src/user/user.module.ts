import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UserModuleBase } from './base/user.module.base';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [UserModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
