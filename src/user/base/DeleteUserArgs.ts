import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserWhereUniqueInput } from './UserWhereUniqueInput';

class DeleteUserArgs {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;
}

export { DeleteUserArgs as DeleteUserArgs };
