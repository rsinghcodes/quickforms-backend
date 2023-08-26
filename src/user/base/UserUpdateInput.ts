import { IsJSONValue } from '@app/custom-validators';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { InputJsonValue } from '../../types';
import { FormUpdateManyWithoutUsersInput } from './FormUpdateManyWithoutUsersInput';
import { SubmissionUpdateManyWithoutUsersInput } from './SubmissionUpdateManyWithoutUsersInput';

class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => FormUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FormUpdateManyWithoutUsersInput)
  @IsOptional()
  forms?: FormUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => SubmissionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SubmissionUpdateManyWithoutUsersInput)
  @IsOptional()
  submissions?: SubmissionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  username?: string;
}

export { UserUpdateInput as UserUpdateInput };
