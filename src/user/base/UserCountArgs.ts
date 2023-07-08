import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { UserWhereInput } from './UserWhereInput';

class UserCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}

export { UserCountArgs as UserCountArgs };
