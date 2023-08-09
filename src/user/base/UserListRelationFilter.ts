import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { UserWhereInput } from './UserWhereInput';

class UserListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @ValidateNested()
  @Type(() => UserWhereInput)
  @IsOptional()
  every?: UserWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @ValidateNested()
  @Type(() => UserWhereInput)
  @IsOptional()
  some?: UserWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @ValidateNested()
  @Type(() => UserWhereInput)
  @IsOptional()
  none?: UserWhereInput;
}
export { UserListRelationFilter as UserListRelationFilter };
