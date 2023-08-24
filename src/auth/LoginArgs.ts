import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Credentials } from './Credentials';

export class LoginArgs {
  @Type(() => Credentials)
  @ValidateNested()
  credentials!: Credentials;
}
