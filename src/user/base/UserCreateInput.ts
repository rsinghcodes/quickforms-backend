import { IsJSONValue } from '@app/custom-validators';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { InputJsonValue } from '../../types';
import { SubmissionCreateNestedManyWithoutUsersInput } from './SubmissionCreateNestedManyWithoutUsersInput';

class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => SubmissionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SubmissionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  submissions?: SubmissionCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  username!: string;
}

export { UserCreateInput as UserCreateInput };
