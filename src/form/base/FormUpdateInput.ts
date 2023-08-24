import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { UserWhereUniqueInput } from '../../user/base/UserWhereUniqueInput';
import { QuestionUpdateManyWithoutFormsInput } from './QuestionUpdateManyWithoutFormsInput';
import { SubmissionUpdateManyWithoutFormsInput } from './SubmissionUpdateManyWithoutFormsInput';

class FormUpdateInput {
  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  createdBy?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => QuestionUpdateManyWithoutFormsInput,
  })
  @ValidateNested()
  @Type(() => QuestionUpdateManyWithoutFormsInput)
  @IsOptional()
  questions?: QuestionUpdateManyWithoutFormsInput;

  @ApiProperty({
    required: false,
    type: () => SubmissionUpdateManyWithoutFormsInput,
  })
  @ValidateNested()
  @Type(() => SubmissionUpdateManyWithoutFormsInput)
  @IsOptional()
  submissions?: SubmissionUpdateManyWithoutFormsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  title?: string;
}

export { FormUpdateInput as FormUpdateInput };
