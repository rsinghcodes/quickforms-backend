import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateInput } from './UserCreateInput';

class CreateUserArgs {
  @ApiProperty({
    required: true,
    type: () => UserCreateInput,
  })
  @ValidateNested()
  @Type(() => UserCreateInput)
  data!: UserCreateInput;
}

export { CreateUserArgs as CreateUserArgs };
