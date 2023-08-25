import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { QuestionWhereUniqueInput } from '../../question/base/QuestionWhereUniqueInput';
import { SubmissionWhereUniqueInput } from '../../submission/base/SubmissionWhereUniqueInput';

class AnswerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => QuestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereUniqueInput)
  @IsOptional()
  question?: QuestionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SubmissionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubmissionWhereUniqueInput)
  @IsOptional()
  submission?: SubmissionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  value?: string;
}

export { AnswerUpdateInput as AnswerUpdateInput };
