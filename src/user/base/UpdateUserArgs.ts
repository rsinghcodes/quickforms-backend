import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserUpdateInput } from './UserUpdateInput';
import { UserWhereUniqueInput } from './UserWhereUniqueInput';

class UpdateUserArgs {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateInput)
  data!: UserUpdateInput;
}

export { UpdateUserArgs as UpdateUserArgs };
