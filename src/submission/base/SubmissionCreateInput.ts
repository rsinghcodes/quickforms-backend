import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { FormWhereUniqueInput } from '../../form/base/FormWhereUniqueInput';
import { UserWhereUniqueInput } from '../../user/base/UserWhereUniqueInput';
import { AnswerCreateNestedManyWithoutSubmissionsInput } from './AnswerCreateNestedManyWithoutSubmissionsInput';

class SubmissionCreateInput {
  @ApiProperty({
    required: true,
    type: () => AnswerCreateNestedManyWithoutSubmissionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerCreateNestedManyWithoutSubmissionsInput)
  @IsOptional()
  answers?: AnswerCreateNestedManyWithoutSubmissionsInput;

  @ApiProperty({
    required: true,
    type: () => FormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FormWhereUniqueInput)
  form!: FormWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}

export { SubmissionCreateInput as SubmissionCreateInput };
