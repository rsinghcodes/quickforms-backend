import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { FormWhereUniqueInput } from '../../form/base/FormWhereUniqueInput';
import { UserWhereUniqueInput } from '../../user/base/UserWhereUniqueInput';
import { AnswerUpdateManyWithoutSubmissionsInput } from './AnswerUpdateManyWithoutSubmissionsInput';

class SubmissionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerUpdateManyWithoutSubmissionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerUpdateManyWithoutSubmissionsInput)
  @IsOptional()
  answers?: AnswerUpdateManyWithoutSubmissionsInput;

  @ApiProperty({
    required: false,
    type: () => FormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FormWhereUniqueInput)
  @IsOptional()
  form?: FormWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  user?: UserWhereUniqueInput;
}

export { SubmissionUpdateInput as SubmissionUpdateInput };
