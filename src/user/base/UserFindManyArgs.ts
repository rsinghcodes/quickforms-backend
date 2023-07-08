import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, ValidateNested } from 'class-validator';
import { UserOrderByInput } from './UserOrderByInput';
import { UserWhereInput } from './UserWhereInput';

class UserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @ApiProperty({
    required: false,
    type: [UserOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UserOrderByInput)
  orderBy?: Array<UserOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  take?: number;
}

export { UserFindManyArgs as UserFindManyArgs };
